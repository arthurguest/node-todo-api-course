const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(`Unable to insert todo: ${err}`);
    //     }
    //     console.log(`Inserted todo successfully: ${JSON.stringify(result.ops, undefined, 2)}`);
    // });

    // db.collection('Users').insertOne({
    //     name: 'Arthur Guest',
    //     age: 37,
    //     location: 'Dubai'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(`Unable to insert user: ${err}`);
    //     }
    //     console.log(`Inserted user successfully: ${result.ops[0]._id.getTimestamp()}`);
    // });

    client.close();
});