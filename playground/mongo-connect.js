const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
        return console.log("Unable to connect to server.");
    }
    // FINDING USERS
    // db.collection('Users').find({name: 'Cole'}).toArray().then((result) => {
    //     console.log(JSON.stringify(result,undefined,2));
    // },(err) => {
    //     console.log('Unable to find the document..');
    // });

    // DELETING MANY INSTANCES 
    // db.collection('Users').deleteMany({name: 'Jeff'}).then((result) => {
    //     console.log(result);
    // });

    // FINDING ONE AND DELETING THE USER
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59b0440b6c82cb8058a6deee')}).then((result) => {
        console.log(result);
    });
    

    // INSERTING ONE TODO ITEM
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todos',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // INSERTING ONE USER
    // db.collection('Users').insertOne({
    //     name: 'Ray',
    //     age: 22,
    //     location: 'Barcelona'
    // },(err, result) => {
    //     if(err){
    //         return console.log('Unable to insert users');
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // console.log('Connected to the server..');
    // db.close();
});