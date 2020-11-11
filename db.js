const Pool = require("pg").Pool

const pool = new Pool({
    user: "bridgette",
    password: "Renly2357",
    host: "localhost",
    port: 5432,
    database: "bobsburgers"
});

module.exports = pool;