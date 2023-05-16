const mongoose = require('mongoose');

const DB = 'mongodb+srv://amirch357:KPq6hJyPbpc5NYu7@cluster0.xijyxu9.mongodb.net/forsage?retryWrites=true&w=majority'

const connectDatabase = () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con =>{
        console.log('Database Connected Successfully');
    }).catch(err => console.log(err));
}
module.exports = connectDatabase;