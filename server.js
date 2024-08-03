const axios = require("axios");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
