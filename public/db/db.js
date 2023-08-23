const postgres = require("postgres");

const PGHOST = "ep-frosty-leaf-52840909.us-east-2.aws.neon.tech";
const PGDATABASE = "neondb";
const PGUSER = "JavaKira";
const PGPASSWORD = "<% PASSWORD %>";
const ENDPOINT_ID = "ep-frosty-leaf-52840909";

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;
const sql = postgres(URL, {ssl: 'require'});

module.exports.sql = sql;