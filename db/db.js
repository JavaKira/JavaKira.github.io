require("dotenv").config();
const postgres = require("postgres");

const sql = postgres(process.env.DB_CONN);

async function getUser(id) {
    const result = await sql`SELECT *
               FROM users
               WHERE user_id = ${id}`;
    if (result.length === 0)
        throw new Error(`Cannot find user with id = ${id}`);

    return result[0];
}

module.exports.getUser = getUser;