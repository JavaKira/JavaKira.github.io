import sql from './db.js'

async function userName(id) {
    const users = await sql`
        SELECT
    `

    return users[userName];
}

function test() {
    return "test";
}

export {userName, test}