const Pool = require("pg").Pool;

const pool = new Pool({
  host: "ec2-52-206-15-227.compute-1.amazonaws.com",
  database: "dddf69k4gdgrso",
  user: "lyopaomrthrbsr",
  port: 5432,
  password: "1890e01796bbe521bb7ead829f6fcb24daf7a205a67eaba240dd075fc219223f",
});

module.exports = pool;

/*
const Pool = require("pg").Pool

const pool = new Pool({
    user: "bridgette",
    password: "Renly2357",
    host: "localhost",
    port: 5432,
    database: "bobsburgers"
});

module.exports = pool;*/
