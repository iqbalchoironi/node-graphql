const {GraphQLNonNull} = require('graphql');
const {playersType, playersInputType} = require('../../types/players');
const playersModel = require('../../../models/players');

const addPlayer = {
    type: playersType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(playersInputType)
        }
    },
    resolve(root, params) {
        const inputPlayer = new playersModel(params.data);
        const newPlayer = inputPlayer.save();

        if (!newPlayer) {
            throw new Error('Cannot create new player');
        }

        return newPlayer;
    }
};

module.exports = addPlayer;