require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const toDoListRoutes = require("./router/list");
const userRoutes = require("./router/user");

// express app
const app = express();
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/to-do-list", toDoListRoutes);
app.use("/api/user", userRoutes);

// connect db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Connection successful, start the server
    app.listen(process.env.PORT, () => {
      console.log(
        "MongoDB Connected & Server is listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
