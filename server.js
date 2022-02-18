const express = require('express');
const {graphqlHTTP , graphiql} = require('express-graphql');
const schema = require('./schemas/schema')
const app = express();

// app.use('/graphql' , graphqlHTTP({
//       schema ,
//       graphiql:true

// }))

app.get("/graphql" , graphqlHTTP({
    schema ,
    graphiql:true

}))

app.listen(3000 , ()=>{
    console.log("server listening on 3000");
})