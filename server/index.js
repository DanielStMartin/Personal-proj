const express = require("express");
const massive = require("massive");
const app = express();
const aC = require("./controller/aC");
const pC = require("./controller/pC");
const tC = require("./controller/tC");
const sC = require("./controller/sC");
const session = require("express-session");
const bcrypt = require("bcrypt");
// const saltRounds = 12;
require("dotenv").config();

// function sessionCheck(req, res, next) {
//   if (req.session.user) {
//     next();
//   } else {
//     res.status(401).send("you must login");
//   }
// }
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STRIPE_TEST_SECRET } = process.env;
const stripe = require("stripe")(STRIPE_TEST_SECRET)
app.use(express.json());
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    //   for dev only
    // db.init();
    console.log("Doing Great Buddy, Terminal Looks Awesome");
  })
  .catch(err => {
    console.log("YOU GOT THIS NO WORRIES!!");
  });
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);
// auth
app.post("/api/login", aC.signIn);
app.post("/api/admin_register", aC.register);
app.post("/auth/register", aC.register);
// app.post("/auth/login", aC.login);
// app.get("/auth/logout", aC.logout);
// app.get("/auth/guest", aC.getSession);

// auth check
// app.use(sessionCheck);
// auth cont'

app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

// admin
app.get("/api/admin/:id", (req, res) => {
  res.status(200).send(req.session.user);
});
app.put("/api/admin/:id");
app.delete("/api/admin/:id");

// product
app.get("/api/store", pC.getAll);
app.get("/api/product",pC.getproductFromCart)
app.post("/api/product/:product_id", pC.addToCart);
app.put("/api/product/:user_cart_id",pC.updateCartQuantity)
app.delete("/api/product",pC.removeFromCart)
app.post("/api/stripe", sC.buyStuff)


// //  Trend
// app.post("/api/favtrend", tC.userAddFavTrend);
// app.get("/api/favtrend", tC.favTrend);
app.get("/api/trend", tC.getAllTrend);
// app.delete("/api/favtrend/:id", tC.favTrendDelete);

// Game Endpoints
// app.post("/api/favgame", gameController.userAddGameFav);
// app.get("/api/game", gameController.allGame);
// app.get("/api/favgame", gameController.favGame);
// app.put("/api/game/:id", gameController.updateGame);
// app.delete("/api/favgame/:id", gameController.favGameDelete);

// // Movie Endpoints
// app.post("/api/favmovie", movieController.userAddMovieFav);
// app.get("/api/movie", movieController.allMovie);
// app.get("/api/favmovie", movieController.favMovie);
// app.put("/api/movie/:id", movieController.updateMovie);
// app.delete("/api/favmovie/:id", movieController.favMovieDelete);

// // Anime Endpoints
// app.post("/api/favanime", animeController.userAddAnimeFav);
// app.get("/api/anime", animeController.allAnime);
// app.get("/api/favanime", animeController.favAnime);
// app.put("/api/anime/:id", animeController.updateAnime);
// app.delete("/api/favanime/:id", animeController.favAnimeDelete);

// // TV Endpoints
// app.post("/api/favtv", tvController.userAddTvFav);
// app.get("/api/tv", tvController.allTv);
// app.get("/api/favtv", tvController.favTv);
// app.put("/api/tv/:id", tvController.updateTv);
// app.delete("/api/favtv/:id", tvController.favTvDelete);

app.listen(SERVER_PORT || 4000, () =>
  console.log("${SERVER_PORT} Listening for Danger")
);
module.exports.stripe = stripe