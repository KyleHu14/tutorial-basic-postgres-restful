const Pool = require('pg').Pool;

const pool = new Pool({
    // These can be stored in a env file 
    user: "postgres",
    password: "postgres",
    database: "todo_basic",
    host: "localhost",
    port: 5432
})

module.exports = pool;
