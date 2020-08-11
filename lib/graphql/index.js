const {GraphQLObjectType, GraphQLSchema} = require('graphql');
const mutation = require('./mutations');
const queries = require('./queries');

const graphqlShema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
})

module.exports = graphqlShema;
