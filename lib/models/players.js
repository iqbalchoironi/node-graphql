const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playersSchema = new Schema({
    name: {type: String, required: true},
    club: {type: String, require: true},
    potition: {type: String, require: true},
    nationality: {type: String, required: true},
    createdAt: Date,
    updatedAt: Date
});

playersSchema.pre('save', (next) => {
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if(!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
})

const players = mongoose.model('players', playersSchema);

module.exports =  players;