const express = require("express");
const app = express();
require("./config/db"); // database connection
/**
 * Import routes files
 */

const vehicle_routes = require("./routes/vehicle");
const user_routes = require("./routes/user");

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.send(`Welcome to the jungle`);
});
/**
 * Set routes imported
 */

app.use("/vehicle", vehicle_routes);
app.use("/user", user_routes);

app.listen(3300, () => {
    console.log(`Server running on port 3300`);
});
