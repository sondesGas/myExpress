const express = require("express");
const path = require("path");

const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "Home.html"));
// });
// app.get("/ContactUs", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "ContactUs.html"));
// });
// app.get("/OurServices", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "OurServices.html"));
// });
// Using Middleware
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => console.log("App listening on port 5000"));
