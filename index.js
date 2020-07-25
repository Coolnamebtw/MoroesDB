const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse requests of CONTENT-TYPE: application/json
app.use(bodyParser.json());

// Parse requests of CONTENT-TYPE: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Define our routing tables.
app.get("/", (req, res) => {
        res.json({ response: { error:"UNAUTHORIZED", description: "Access to this object or value has been denied.", result: 401 }});
});

require("./routes/test.route.js")(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("if this works mark wrote it");
})