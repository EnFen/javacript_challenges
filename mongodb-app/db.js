const {
    MongoClient,
    ObjectID
} = require('mongodb')

// URI to connect to the test database in mongodb
const uri = 'mongodb://localhost:27017'

MongoClient.connect(uri, function (err, client) {
    // Use the test db
    const db = client.db('test')
    // Get the admin interface
    const adminDb = db.admin();
    // List all the available databases
    adminDb.listDatabases(function (err, dbs) {
        console.log(dbs)
        client.close()
    })

    const Cars = db.collection('cars')

    // Converts the collection to an array, and then loop over each document
    Cars.find()
        .toArray()
        .then(cars => {
            console.log(cars); // Show complete collection of cars in the terminal
            cars.forEach(car => console.log(car.brand)); // Show each car brand in the terminal
        });

    const carID = new ObjectID('5c0dca834c40d25a2cf58260');
    // Now delete the car of your choice
    Cars.findOneAndDelete({
            _id: carID
        })
        .then(deleteLog => {
            console.log(deleteLog);
        })
})