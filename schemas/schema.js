const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType , GraphQLString ,GraphQLSchema} = graphql;
var books = [
    {name : "book1" , genre : 'fantasy ' , id : '1'},
    {name : "book2" , genre : 'thriller ' , id : '12'},
    {name : "book3" , genre : 'gero ' , id : '13'}

]


const BookType = new GraphQLObjectType({
    name : 'Book' ,
    fields:()=>({
        id : {type:GraphQLString},
        name : { type : GraphQLString} ,
        genre : {type : GraphQLString}

    })
})

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType' ,
    fields: {
        Book :{
            type : BookType,
            args : {id : {type : GraphQLString}},
            resolve(parent , args){
              return  _.find(books , {id :args.id})

            }
            
        }
    }
})

module.exports = new GraphQLSchema({
    query : RootQuery
})