const express = require('express');
const PORT = 5000;
const app = express()
const graphql, {GraphQLObjectType, GraphQLSchema, GraphQLInt,GraphQLString} =require('graphql');
const {graphqlHTTP} = require('express-graphql');

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLInt},
        Name: {type: GraphQLString},
        email: {type: GraphQLString},
    })
})

const RootQuery  = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAlluser:
    }
})
const Mutation = "mutation"

const schema = new GraphQLSchema({query: RootQuery , mutation: Mutation});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
    
app.listen(PORT, ()=> console.log('Server Running...'));