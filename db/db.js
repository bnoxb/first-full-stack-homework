const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/egypt';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () =>{
    console.log(`Mongoose has connected to ${connectionString}`);
});

mongoose.connection.on('err', () =>{
    console.log(`Mongoose err ${err}`);
});

mongoose.connection.on('disconnected', () =>{
    console.log(`Mongoose has disconnected from ${connectionString}`);
});