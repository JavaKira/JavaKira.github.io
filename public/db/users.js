const sql = require("./db.js");

// async function userName(id) {
//     const users = await sql`
//         SELECT
//     `
//
//     return users[userName];
// }

function test() {
    return sql`select version()`
}

module.exports.test = test;