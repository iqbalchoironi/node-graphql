const {GraphQLID, GraphQLNonNull} = require('graphql');
const { playersType } = require('../../types/players');
const playersModel =  require('../../../models/players');

const getPlayerSingle = {
    type: playersType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return playersModel.findById(params.id).exec();
    }
}
 
module.exports = getPlayerSingle;