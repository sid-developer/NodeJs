const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const player_schema = new Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
}, {timestamps : true})

const player_info_model = mongoose.model('player_info', player_schema, 'player_info');
module.exports = player_info_model;