const friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
       return res.json(friendsData);
    
    });

    app.post("/api/friends", function (req, res) {
        // data collection, comparing and display of match logic goes in here
        // obviously, this is as far as I have made it. Will continue to work on this ASAP
    })

};