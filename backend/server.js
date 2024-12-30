//lets use es6 new method
import express from "express";
import dotenv from "dotenv";

//after importing the dotenv we need to call the config

dotenv.config();

const app = express(); //here we are callling the function

// now lets do for the route.
app.get("/products", (req, res) => {
  res.send("server is ready123!");
});
//to connect the mogodb below
console.log(process.env.MONGO_URI);

// Start the server
app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});

// database password = vbhf2hIfAW7yVOFP
