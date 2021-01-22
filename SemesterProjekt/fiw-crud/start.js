const path = require("path");
const express = require("express");
const cors = require("cors");

const routes = require("./fiw-crud-backend/routes/index.js");
const bodyParser = require("body-parser");
const app = express();
const frontendDir = path.join(__dirname, "fiw-crud-frontend", "dist");
app.use(express.static(frontendDir));
app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json({ limit: "50mb" }));
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// use routes...
routes(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});
const PORT = 9090;
app.listen(PORT, () => {
  console.log("Sever started Listening.....");
  console.log(`http://localhost:${PORT}`);
});
