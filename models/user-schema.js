const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    mob : {
        type : String,
        required : true
    }
}, {
    timestamps : true
})

const user_schema = mongoose.model('user_details', userSchema, 'user_details')
module.exports = user_schema