const express = require('express')
const app = express()

require('./test/mo_connect_test')
const Carrier =require('./model/schema')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/search/:text',async(req,res)=>{
    const text = req.params.text;
    const textL = text.toLowerCase()
       const data = await Carrier.aggregate([
            { 
               $match: {
                   $or: [ 
                        {title: {$regex:textL}}, 
                        {altTitle: {$in:[{$regex:textL}]}}, 
                        {category: {$regex:textL}}
              ]
             }
    }

       ]).limit(10);
       
       res.status(200).send(data);

})

app.get('/profile/:slug',async(req,res)=>{
    
    let slug = req.params.slug;
    try{
    const data = await Carrier.find({slug:slug});
     res.status(200).send(data);
    }catch(err){
       res.status(400).send(err);
    }
})








 
 app.post('/',async(req,res)=>{ 
     
       const data = new Carrier({
           category:req.body.category,
           altTitle:req.body.altTitle,
           description:req.body.description,
           
           weeklyWorkHours:req.body.weeklyWorkHours,
           title:req.body.title,
           url:req.body.url,
           slug:req.body.slug,
           yearlyAvgSalary:req.body.yearlyAvgSalary
       })
       try{
           await data.save();
           res.status(200).send(data);
           console.log(data);
     }catch(err){
    res.status(404).send(err);
    console.log(err);
}
 })

 

app.listen(4008, () => {
    console.log(`Server is running`)
})
