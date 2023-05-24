const express = require("express")
const App =express()
const mysql = require("mysql")
const cors =require("cors")

App.use(cors());
App.use(express.json());

DB = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"appweb"
})

App.post("/Login", (req,res)=>{
    
    const Cedula = req.body.Cedula
    const Nombre = req.body.Nombre
    const Apellido = req.body.Apellido
    const Email = req.body.Email
    const contrasena = req.body.Contrasena

    DB.query("INSERT INTO persona (Cedula, Nombre, Apellido, Email, Contrasena) VALUES (?,?,?,?,?)",[Cedula, Nombre, Apellido, Email, contrasena],
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
})





App.listen(3001, ()=>{
    console.log("Corriendo por el pueto: 3001");
})

