var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name: {type: String, required: true},
    email: {type: String},
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('User', User);

// module.exports = function(mongoose) {
//     return [{
//         name: {type: String, required: true},
//         email: {type: String}
//     }, {
//         timestamps: true,
//         createdby: true,
//         updatedby: true
//     }]
// };