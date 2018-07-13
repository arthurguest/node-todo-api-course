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

    // db.collection('Todos').deleteMany({
    //     text: 'Go to gym'
    // }).then((result) => {
    //     console.log(result.result);
    // });

    // db.collection('Todos').deleteOne({
    //     text: 'Go to gym'
    // }).then((result) => {
    //     console.log(result.result);
    // });

    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({
        name: 'Arthur Guest'
    }).then((result) => {
        console.log(result.result);
    });

    db.collection('Users').findOneAndDelete({
        _id: ObjectID("5b487074a5e4a324809934ef")
    }).then((result) => {
        console.log(result);
    });


    // client.close();
});