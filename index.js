// // importing dependencies
// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");
// const initdb = require("./config/dbconnect");
// const app = express();
// const path = require("path");
// initdb();

// // middlewares
// app.use(express.json());
// app.use(cors());

// app.use("/", (_req, res) => {
//   return res.send("Health check ok!!");
// });

// //routes
// app.use("/api/v1/auth", require("./routes/authroutes"));
// app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
// app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
// app.use("/api/v1/admin", require("./routes/adminRoutes"));

// // STATIC FOLDER
// // app.use(express.static(path.join(__dirname, "./client/build")));

// // STATIC ROUTES
// // app.get('*' , function(req, res){
// //     res.sendFile.path.join(__dirname , './client/build/index.html');
// // })

// // app.get('*', function(req, res){
// //     res.sendFile(path.join(__dirname, './client/build/index.html'));
// // })

// // Port and Server starting
// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(
//     `Node server running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`
//   );
// });

// index.js
const express = require("express");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
