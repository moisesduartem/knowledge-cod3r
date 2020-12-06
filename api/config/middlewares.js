const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = app => {
    /**
     * Configure application to
     * receive JSON requests.
     */
    app.use(bodyParser.json());
    /**
     * Configure CORS.
     */
    app.use(cors());
};