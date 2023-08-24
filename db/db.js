const postgres = require("postgres");

const PGHOST = "ep-frosty-leaf-52840909.us-east-2.aws.neon.tech";
const PGDATABASE = "neondb";
const PGUSER = "JavaKira";
const PGPASSWORD = "dxS5EMUWHf7J";
const ENDPOINT_ID = "ep-frosty-leaf-52840909";

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;
const sql = postgres(URL, {ssl: 'require'});

function getUser(id) {
    return sql`SELECT *
               FROM users
               `
    //WHERE user_id = ${id}
}

module.exports.getUser = getUser;