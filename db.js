const Pool = require("pg").Pool

const pool = new Pool({
    user: "bridgette",
    password: "Renly2357",
    host: "postgres://lyopaomrthrbsr:1890e01796bbe521bb7ead829f6fcb24daf7a205a67eaba240dd075fc219223f@ec2-52-206-15-227.compute-1.amazonaws.com:5432/dddf69k4gdgrso",
    port: 5432,
    database: "bobsburgers"
});

module.exports = pool;