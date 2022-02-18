const express = require('express');
const axios = require('axios')
const app = express();

app.get('/' , async()=>{
   const res =   await axios({
        url: 'https://beta.thesilverlabs.com/graphql',
        method: 'GET',
        data: {
          query: `{
  
  
  
            aboutUsSectionOld{
             name
           }
             
             
           
           }
            `
        }
      })
      console.log(JSON.stringify(res.data));
        
})
app.listen(4000 , ()=>{
    console.log("server2 running on port 4000");
})