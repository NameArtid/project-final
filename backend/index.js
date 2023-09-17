const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const port = 3001;

var host = 'localhost';
if (process.env.NODE_ENV === 'production') {
  host = 'testmysql'
}

// MySQL Connection
const db = mysql.createConnection({
  host: host,
  user: "root",
  password: "1234",
  database: "drink",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Create a new menu
app.post("/menu", (req, res) => {
  const { id, descr, price } = req.body;
  const query = "INSERT INTO menu (id,descr, prine) VALUES (?,?, ?)";
  db.query(query, [id, descr, price], (err) => {
    if (err) {
      console.error("Error creating a new menu: ", err);
      return res.status(500).send("Error creating a new menu.");
    }
    res.status(201).json({ id, descr, price });
  });
});

// Get all menu
app.get("/menus", (req, res) => {
  const query = "SELECT * FROM menu";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching menu: ", err);
      return res.status(500).send("Error fetching menu.");
    }
    res.json(result);
  });
});

// Get a menu by ID
app.get("/menu/:id", (req, res) => {
  const menuId = req.params.id;
  const query = "SELECT * FROM menu WHERE id = ?";
  db.query(query, [menuId], (err, result) => {
    if (err) {
      console.error("Error fetching menu: ", err);
      return res.status(500).send("Error fetching menu.");
    }
    if (result.length === 0) {
      return res.status(404).send("Menu not found.");
    }
    res.json(result[0]);
  });
});

// Update a menu by ID
app.put("/menu/:id", (req, res) => {
  const menuId = req.params.id;
  const { descr, prine } = req.body;
  const query = "UPDATE menu SET descr = ?, prine = ? WHERE id = ?";
  db.query(query, [descr, prine, menuId], (err, result) => {
    if (err) {
      console.error("Error updating menu: ", err);
      return res.status(500).send("Error updating menu.");
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("Menu not found.");
    }
    res.json({ id: menuId, descr, prine });
  });
});

// Delete a menu by ID
app.delete("/menu/:id", (req, res) => {
  const menuId = req.params.id;
  const query = "DELETE FROM menu WHERE id = ?";
  db.query(query, [menuId], (err, result) => {
    if (err) {
      console.error("Error deleting menu: ", err);
      return res.status(500).send("Error deleting menu.");
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("Menu not found.");
    }
    res.send("Menu deleted successfully.");
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
