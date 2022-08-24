const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_details = new Schema({

    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        requied : true
    },
    gender : {
        type : String,
        required : true
    },
    // hobbies : {
    //     type : String,
    //     required : true
    // },
    city : {
        type : String,
        requied : true
    },
    about_your_self : {
        type : String,
        required : true
    }
},{timestamps : true})

const user_details_schema = mongoose.model('user_details', user_details, 'user_details')

module.exports = user_details_schema;