const express = require("express");
const bodyParser = require("body-parser");
const city = require("./city");
const itinerary = require("./itineraries.js");
const activity = require("./activities.js");
const app = express();
const port = process.env.PORT || 5000;
const getRoutes = require("./Routes/get");
const postRoutes = require("./Routes/post");
const putRoutes = require("./Routes/put");
const database = require('./database');
const passport = require('passport');
<<<<<<< HEAD
=======
const deleteRoutes = require("./Routes/delete");
>>>>>>> 2d4c097a86603e272e024bb85b9d7d10ccf854b6

//passport middleware
app.use(passport.initialize());
//passport configuration
require("./passport.js");
require("./googlestrategy.js");

app.listen(port, () => console.log(`server running on port ${port}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use("/", [getRoutes,postRoutes, putRoutes]);
=======
app.use("/", [getRoutes,postRoutes, putRoutes, deleteRoutes]);
>>>>>>> 2d4c097a86603e272e024bb85b9d7d10ccf854b6
