const express = require("express");
const router = express.Router();
const pool = require('../../db');


router.get("/burgers", async (req, res) => {

    try{
        const allBurgers = await pool.query("SELECT * FROM burgers")

        res.json(allBurgers.rows)
    }catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
    
})


module.exports = router