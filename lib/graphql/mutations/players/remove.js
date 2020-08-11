const {GraphQLID, GraphQLNonNull} = require('graphql');
const {playersType} = require('../../types/players');
const playersModel =  require('../../../models/players');

const removePlayer = {
    type: playersType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removePlayer = playersModel.findByIdAndRemove(params.id).exec();

        if(!removePlayer) {
            throw new Error('Connot remove player');
        }

        return removePlayer;
    }
};

module.exports = removePlayer;