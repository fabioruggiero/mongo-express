var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: {type: String, required: true, unique: true}
    name: String,
    admin: Boolean,
    created_at: Date,
    updated_at: Date
})