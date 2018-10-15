// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5bc0554118cabe7632a50636')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({_id: new ObjectId('5bc05b0d6f745c765d44bc57')}, 
        {$set: {name: 'Iva'}, $inc: {age: -3}}, 
        {returnOriginal: false})
        .then((result) => {
            console.log(result);
    })


    // client.close();

})