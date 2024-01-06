const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://omtiwari123:moMnlB8kfM6m73Ni@cluster0.wjckru4.mongodb.net/');

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
 const todos=mongoose.model('Todos',todoSchema);
 module.exports={
    todos
 }