const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("./Models/queries");
//Ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//Passport
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

//* setting up the LocalStrategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.getUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.getUserById(id);

    done(null, user);
  } catch (err) {
    done(err);
  }
});

//* user local variable (available across views <- as currentUser )
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//Routes
const signUpRouter = require("./Routes/signUpRouter");
const logInRouter = require("./Routes/logInRouter");
const logOutRouter = require("./Routes/logOutRouter");

app.get("/", (req, res) => {
  res.render("home");
});
app.use("/sign-up", signUpRouter);

app.use("/log-in", logInRouter);

app.use("/log-out", logOutRouter);

app.get("err", (err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("App listening on port http://localhost:3000");
});
