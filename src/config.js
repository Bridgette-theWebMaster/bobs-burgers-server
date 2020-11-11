module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://bridgette:Renly2357@localhost/bobsburgers',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://lyopaomrthrbsr:1890e01796bbe521bb7ead829f6fcb24daf7a205a67eaba240dd075fc219223f@ec2-52-206-15-227.compute-1.amazonaws.com:5432/dddf69k4gdgrso',
    jwtSecret: process.env.jwtSecret || 'jwtSecret'
}