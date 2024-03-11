const express = require("express");
const cors = require("cors");
const AccommodationsList = require("./accommodations");
const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  next();
});
app.get("/accommodations", (req, res) => {
  res.json(AccommodationsList);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


