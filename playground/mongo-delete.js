const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
        return console.log("Unable to connect to server.");
    }
   

    // DELETING MANY INSTANCES 
    db.collection('Users').deleteMany({name: 'Jeff'}).then((result) => {
        console.log(result);
    });

    // FINDING ONE AND DELETING THE USER
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59b0440b6c82cb8058a6deee')}).then((result) => {
        console.log(result);
    });
    

   
    console.log('Connected to the server..');
    // db.close();
});