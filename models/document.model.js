var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Document = new Schema({
    documentId: {type: String, required: true, unique: true},
    title: String,
    author: String,
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('Document', Document);

// module.exports = function(mongoose) {
//     return [{
//         documentId: {type: String, required: true, unique: true},
//         title: String,
//         author: String
//     }, {
//         timestamps: true,
//         createdby: true,
//         updatedby: true
//     }]
// };