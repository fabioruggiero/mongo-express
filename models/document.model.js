var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentSchema = new Schema({
    documentId: {type: String, required: true, unique: true},
    title: String,
    author: String,
    created_at: Date,
    updated_at: Date
});

var Document = mongoose.model('Document', documentSchema);

module.exports = Document;