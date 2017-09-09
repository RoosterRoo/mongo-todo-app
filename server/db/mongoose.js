var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp', {
    useMongoClient: true,
}).then(()=>{
    module.exports = {mongoose};
},(err)=>{
    console.log("Unable to connect to mongo servers");
});


