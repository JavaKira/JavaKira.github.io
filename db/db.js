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

async function getServices() {
    return await sql`SELECT *
                FROM services`;
}

async function getTasks(service_name) {
    return await sql`SELECT * 
                FROM all_tasks
                WHERE type_tasks = ${service_name} and status_task = ${"open"}`
}

module.exports.getUser = getUser;
module.exports.getServices = getServices;
module.exports.getTasks = getTasks;