
const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api/data", (req, res) => {
  const data = {
    timestamps: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
  };
  res.json(data);
});

app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
