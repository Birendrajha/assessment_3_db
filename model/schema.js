const mongoose = require('mongoose')
const modelschema =new mongoose.Schema({
   
    category:{
        type:String,
        
       
    },
    altTitle: [{
                type: String,
     }] ,
     description:{
         type:String
     },
     
     weeklyWorkHours: {
        max: Number,
        min: Number,
        schedule: String
      },
      title: {
        type: String,
        

    },
      url: {
          type:String,
      },
      slug: {
          type:String
      },
      yearlyAvgSalary: [
        {
         currency:{
             type:String
         },
         type:{
             type:String
         },
        value: {
           type:String
         }
        }
       
      ]


}) 
const  Carrier =mongoose.model('Carrier',modelschema)
module.exports = Carrier;