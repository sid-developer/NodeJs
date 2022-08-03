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

    })

const UserInfo = mongoose.model('user_info', ItemSchema);
module.exports = UserInfo