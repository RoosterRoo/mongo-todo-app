const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
        return console.log("Unable to connect to server.");
    }
    
    // FINDING USERS
    db.collection('Users').find({name: 'Cole'}).toArray().then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    },(err) => {
        console.log('Unable to find the document..');
    });

    

    // FINDING ONE AND DELETING THE USER
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59b0440b6c82cb8058a6deee')}).then((result) => {
        console.log(result);
    });
    

   console.log('Connected to the server..');
   //db.close();
});