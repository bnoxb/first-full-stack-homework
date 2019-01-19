const mongoose = (require('mongoose'));

const egyptSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    realm: [{type: String}],
    appearance: [{type: String}],
    isAlive: Boolean
});

const Egypt = mongoose.model('Egypt', egyptSchema);

module.exports = Egypt;