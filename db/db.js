const postgres = require("postgres");

const URL = `postgres://latand:google1993google@185.51.121.57:5432/freelance`;
const sql = postgres(URL);

async function getUser(id) {
    const result = await sql`SELECT *
               FROM users
               WHERE user_id = ${id}`;
    if (result.length === 0)
        throw new Error(`Cannot find user with id = ${id}`);

    return result[0];
}

module.exports.getUser = getUser;