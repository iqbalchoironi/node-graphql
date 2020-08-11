const {GraphQLList} = require('graphql');
const { playersType } = require('../../types/players');
const playersModel =  require('../../../models/players');

const getPlayerMultiple = {
    type: new GraphQLList(playersType),
    resolve(root, params) {
        const players = playersModel.find().exec();
        
        if(!players) {
            throw Error('Error getting players');
        }

        return players;
    }
}

module.exports = getPlayerMultiple;
 