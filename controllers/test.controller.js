const Test = require("../models/test.model.js");

// Find a single test with a testId
exports.findOne = (req, res) => {
    Test.findById(req.params.testId, (err, data) => {
        if(err) {
            if(err.kind === "not_found") {
                res.status(404).send({
                    result: {
                        message: `Object not found (${req.params.testId})`,
                        result: 404
                    }
                });
            } else {
                res.status(500).send({
                    result: {
                        message: `Internal server error (${req.params.testId})`,
                        result: 500
                    }
                });
            }
        } else res.send({ 
            result: data,    
            status: 200
        });
    });
};

exports.create = (req, res) => {
    // Validate the request
    if(!req.body) {
        res.status(400).send({
            result: "Invalid request",
            status: 400
        });
    }

    console.log(req);
    // Create a test.
    const test = new Test({
        string: req.body.string,
        integer: req.body.integer
    });

    Test.create(test, (err, data) => {
        if(err)
            res.status(500).send({
                message: "Internal server error",
                status: 500
            });
        else res.send(data);
    })
};
