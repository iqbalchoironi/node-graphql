const {GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLID} = require('graphql');
const GraphQLDate = require('grapql-date');
const players = require('../../models/players');
const { GraphQLScalarType } = require('graphql');

const playersType = new GraphQLObjectType({
    name: 'Players',
    description: 'Player Type',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        club: {
            type:GraphQLString
        },
        potition: {
            type: GraphQLString
        },
        nationality: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLDate
        },
        updatedAt: {
            type: GraphQLDate
        }
    })
});

const playersInputType = new GraphQLInputObjectType({
    name: 'PlayerInput',
    description: 'Player Input Type',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        club: {
            type:GraphQLString
        },
        potition: {
            type: GraphQLString
        },
        nationality: {
            type: GraphQLString
        },
    })
});

module.exports = {playersType, playersInputType};