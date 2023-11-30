// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// // Database
// const database = module.exports = () => {
//     const connectionParams = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
//     try {
//         mongoose.connect('mongodb+srv://waleed:testing123@cluster0.kdjaday.mongodb.net/mongodb?retryWrites=true&w=majority');
//         console.log('Databse connected successfully!');
//     } catch (err) {
//         console.error(err);
//     }
// }

// database();

// app.listen(3000, () => {
//     console.log('server is running on port 3000');
// });

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const uri = "mongodb+srv://mongotut:mongotut@cluster0.palaf9j.mongodb.net/mongotut?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }
}

connect();

app.listen(3000, () => {
    console.log('server is running on port 3000');
});