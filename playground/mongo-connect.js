const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
        return console.log("Unable to connect to server.");
    }
    db.collection('Users').find({name: 'Cole'}).toArray().then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    },(err) => {
        console.log('Unable to find the document..');
    })
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todos',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
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