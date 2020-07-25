module.exports = app => {
    const test = require("../controllers/test.controller.js");

    // Retrieve a single test by testId
    app.get("/test/:testId", test.findOne);
    app.post("/test", test.create);
}

