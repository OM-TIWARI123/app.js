const express = require('express');
const zod=require('zod');
const {createTodo,updateTodo} = require('./types')
const app = express();
const cors=require('cors');
const {todos} = require('./db');
const port = 3000;

app.use(express.json());
//
app.use(cors());
app.post('/todo',async function(req,res){
    const todo={
        title: req.body.title,
        description: req.body.description
    }
    const parsedPayload=createTodo.safeParse(todo);
    console.log(parsedPayload);
    if(!parsedPayload.success){
        res.status(411).json({message:"you sent the wrong inputs"})
        return;
    }
    await todos.create({
        title:todo.title,
        description:todo.description,
        completed:false
    })
    res.json({
        message:"Todo created"
    })
    

})

app.get('/todos',async function(req,res){
   const alltodos=await todos.find({});
   res.json({alltodos})
})

app.put('/completed',async function(req,res){
    const todo={
        title: req.body.title,
        description: req.body.description
    }
    const parsedPayload=createTodo.safeParse(todo);
    console.log(parsedPayload);
    if(!parsedPayload.success){
        res.status(411).json({message:"you sent the wrong inputs"})
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({msg:"todo updated"})    
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})