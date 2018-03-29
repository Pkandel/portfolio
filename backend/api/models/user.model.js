const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    name: {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true }
    },
    email: { type: String, required: true },
    created_on: { type: Date, required: true, default: new Date()},
});

module.exports = mongoose.model('user', UserSchema);

