const Pool = require("pg").Pool

const pool = new Pool({
    user: "lyopaomrthrbsr",
    password: "1890e01796bbe521bb7ead829f6fcb24daf7a205a67eaba240dd075fc219223f",
    host: "ec2-52-206-15-227.compute-1.amazonaws.com",
    port: 5432,
    database: "dddf69k4gdgrso"
});

module.exports = pool;