const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

let chantiers = [];

app.get("/", (req, res) => {

  res.send("API OK");

});

app.get("/chantiers", (req, res) => {

  res.json(chantiers);

});

app.post("/chantiers", (req, res) => {

  const chantier = req.body;

  chantier.id = Date.now();

  chantiers.push(chantier);

  res.json(chantier);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running"));
