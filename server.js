const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongoDB connection
connectDB();

// rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
// app.get("/", (req, res) => {
//     res.status(200).send({
//         message: "server running",
//     });
// });

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// port
const port = process.env.PORT || 7520;

//listen
app.listen(port, () => {
  console.log(
    `server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
