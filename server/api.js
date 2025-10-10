var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors()); //middleware
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get("/getusers", (req, res) => {
    mongoClient.connect(connectionString, (err, clientObj) => {
        if (!err) {
            var database = clientObj.db('reactdb');
            database.collection('tbldata').find({}).toArray((err, documents) => {
                if (!err) {
                    res.send(documents);
                }
            });
        } else {
            console.log("data not available");
        }
    });
});

app.post("/registeruser", (req, res) => {
    var userdetails = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Age: parseInt(req.body.Age),
        Mobile: req.body.Mobile,
        Subscribe: (req.body.Subscribe == "true") ? true : false
    }
    mongoClient.connect(connectionString, (err, clientObj) => {
        if (!err) {
            var database = clientObj.db("reactdb");
            database.collection("tbldata").insertOne(userdetails, (err, result) => {
                mongoClient.connect(connectionString, (err, result) => {
                    if (!err) {
                        console.log("Record inserted...");
                        res.redirect("/getusers");
                    }
                });
            })

        }
    });
});



app.listen(4000, () => {
    console.log("Server started: http://127.0.0.1:4000");
});