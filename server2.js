const express = require('express');
const axios = require('axios')
const app = express();

app.get('/' , async(req , res)=>{
  
  res.send("hello server 2");
        
})



  setInterval(async()=>{

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
    if(res.status!=200)
    console.log(res.status);
  




  },5000)





app.listen(4000 , async ()=>{

  

    console.log("server2 running on port 4000");
})