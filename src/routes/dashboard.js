const router = require("express").Router();
const pool = require("../../db");
const authorize = require("../middleware/authorize");
const bcrypt = require("bcrypt");

// Get user
router.get("/", authorize, async (req, res) => {
  try {
    res.json(user.rows[0]);
  } catch (err) {
    // console.error(err.message)
    res.status(500).json("Server Error");
  }
});

//user edit and delete
router.patch("/user/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    console.log(password, "password");
    console.log(req.body, "body");
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    console.log(salt, "salt");
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

router.delete("/user/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);

    res.json("User was deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

//order get post and put/patch?

router.get("/orders", authorize, async (req, res) => {
  try {
    const allOrders = await pool.query("SELECT * FROM orders WHERE uid = $1", [
      req.allOrders,
    ]);
    res.json(allOrders.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

//routing for an order item to make up an order
// create order
router.post("/orders", async (req, res) => {
  const { user_id, order_date } = req.body;
  const createOrder = await pool.query(
    "INSERT INTO orders (user_id, order_date) VALUES ($1, $2) RETURNING *",
    [uid, order_date]
  );
  res.json(createOrder.rows[0]);
  res.status(500).json("Server Error");
});
// create items

router.post("/items", async (req, res) => {
  try {
    //destucture req.body
    //!! i dunno if this is right!!
    const { bid, oid, quantity, price } = req.body;
    const createItem = await pool.query(
      "INSERT INTO items (bid, oid, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *",
      [bid, oid, quantity, price]
    );

    res.json(createItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
