import {useState} from "react";
export function CreateTodo(){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("")
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }} /><br />
        <input type="text" placeholder="description" onChange={function(e){
            const value=e.target.value;
            setDescription(value);
        }} /><br />
        <button onClick={()=>{fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description,

                }),
                headers:{
                    "contentType":"application/json"
                }
            }).then(function(res){
                console.log("request sent");
                const json=res.json();
                console.log(json);
            })}}>Add a todo</button>
    </div>
} 