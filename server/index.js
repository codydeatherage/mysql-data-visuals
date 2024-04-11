const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const tableName = "products";
app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const q = `SELECT * FROM ${tableName}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/products/:productId", (req, res) => {
  const productId = req.params.productId;
  const q = `SELECT * FROM ${tableName} WHERE productId = ?`;
  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connect to backend.");
});
