const postgres = require("postgres");

const PGHOST = "ep-frosty-leaf-52840909.us-east-2.aws.neon.tech";
const PGDATABASE = "neondb";
const PGUSER = "JavaKira";
const PGPASSWORD = "dxS5EMUWHf7J";
const ENDPOINT_ID = "ep-frosty-leaf-52840909";

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;
const sql = postgres(URL, {ssl: 'require'});

async function getUser(id) {
    return await sql`SELECT *
               FROM users
               WHERE user_id = ${id}`[0];
}

module.exports.getUser = getUser;