const mongoose = require('mongoose');
const Schema = mongoose.Schema
    const ItemSchema = new Schema({
        name : {
            type: String,
            rquired: true
        },
        email : {
            type: String,
            required: true
        }

    },{
        timestamps : true
    })

const UserInfo = mongoose.model('demo', ItemSchema, 'demo');
module.exports = UserInfo