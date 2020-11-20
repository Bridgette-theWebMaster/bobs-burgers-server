const router = require("express").Router();
const pool = require("../../db");
const bcrypt = require("bcrypt");
const authorize = require("../middleware/authorize");

router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query("SELECT name FROM users WHERE id = $1", [
      req.user,
    ]);

    res.json(user.rows[0]);
  } catch (err) {
    // console.error(err.message)
    res.status(500).json("Server Error");
  }
});

router.delete("/user/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);

    res.json("User deleted");
  } catch (err) {
    res.status(500).json("Server Error");
  }
});

router.patch("/user/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);
    const updatedPassword = await pool.query(
      "UPDATE users SET password = $1 WHERE id = $2",
      [bcryptPassword, id]
    );

    res.json("Password updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
