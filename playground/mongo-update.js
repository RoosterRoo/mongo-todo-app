const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
        return console.log("Unable to connect to server.");
    }

    // UPDATING A USER
    db.collection("Users").findOneAndUpdate({_id: new ObjectID("59b02c9173699edf008acfba")},
    {
        $set: {
            location: "WI"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    console.log('Connected to the server..');
    // db.close();
});