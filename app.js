const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

//Ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
//Routes
const signUpRouter = require("./Routes/signUpRouter");

app.get("/", (req, res) => {
  res.render("home");
});
app.use("/sign-up", signUpRouter);

app.listen(3000, () => {
  console.log("App listening on port http://localhost:3000");
});
