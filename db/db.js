import postgres from 'postgres'
import ssh2 from 'ssh2'

const sql = postgres('postgres://localhost:5432/postgres',{
    host                 : 'localhost',           // Postgres ip address[s] or domain name[s]
    port                 : 5432,                  // Postgres server port[s]
    database             : 'postgres',            // Name of database to connect to
    username             : 'postgres',            // Username of database user
    password             : 'postgres',            // Password of database user,
    socket               : new Promise((resolve, reject) => {
        const ssh = new ssh2.Client()
        ssh
            .on('error', reject)
            .on('ready', () =>
                ssh.forwardOut('127.0.0.1', 5432, "5.253.61.170", 5432,
                    (err, socket) => err ? reject(err) : resolve(socket)
                )
            )
            .connect({
                host: '5.253.61.170',
                port: 22,
                username: 'root',
                privateKey: 'aF18iC0Z6Ob3oUiUt5'
            })
    })
})

export default sql