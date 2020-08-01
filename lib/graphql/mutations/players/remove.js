const {GraphQLID, GraphQLNonNull} = require('graphql');
const {playersType} = require('../../types/players');
const playerModel =  require('../../../models/players');

const removePlayer = {
    type: playersType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removePlayer = playerModel.findById(params.id).exec();

        if(!removePlayer) {
            throw new Error('Connot remove player');
        }

        return removePlayer;
    }
};

module.exports = removePlayer;