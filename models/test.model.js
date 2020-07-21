const sql = require('./db.model.js');

// Constructor 
const Test = function(test) {
    this.string = test.string;
    this.integer = test.integer;
}

Test.create = (newTest, result) => {
    console.log(newTest);
    sql.query("INSERT INTO TestTable SET ?", newTest, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("added test: ", { index: res.insertIndex, ...newTest });
        result(null, { index: res.insertIndex, ...newTest });
    });
};

Test.findById = (testId, result) => {
    sql.query(`SELECT * FROM TestTable WHERE Id=${testId}`, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length) {
            console.log("found test: ", res[0]);
            result(null, res[0]);
            return;
        }

        // failed to find test
        result({ kind: "not_found"}, null);
    });
};

module.exports = Test;