const app = require("express")();
const consign = require("consign");

consign()
    .then("./config/middlewares.js")
    .then("./resources")
    .then("./config/routes.js")
    .into(app);

/**
 * Listen port 3001.
 */
app.listen(3001);
