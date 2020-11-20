const Pool = require("pg").Pool;
/*
const pool = new Pool({
    host: "ec2-52-206-15-227.compute-1.amazonaws.com",
    database: "dddf69k4gdgrso",
    user: "lyopaomrthrbsr",
    port: 5432,
    password: "1890e01796bbe521bb7ead829f6fcb24daf7a205a67eaba240dd075fc219223f"
});
*/

const pool = new Pool({
  host: "localhost",
  database: "bobsburgers",
  user: "postgres",
  port: 5432,
  password: "",
});
module.exports = pool;
