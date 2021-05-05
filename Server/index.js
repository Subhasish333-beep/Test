const express = require("express");
const mongoose = require("mongoose")
const cors=require("cors");
const bodyparser=require("body-parser");
// const dotenv = require("dotenv")
const app = express();
// dotenv.config({path:"./config.env"});
app.use(bodyparser.urlencoded({
    extended : true
}))

app.use(bodyparser.json())

app.use(cors());
const db = "mongodb+srv://admin:admin@cluster0.l5kk3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = 4000
mongoose.connect(db,
    { useNewUrlParser: true ,
     useUnifiedTopology: true }).then(()=>{
    console.log("CONNECTED")
}).catch((err)=> console.log("NOT CONNECTED"))

const studentSchema = new mongoose.Schema({
    "name":"",
    "email":"",
    "password":"",
    "role":""
})

const Student = mongoose.model("Student",studentSchema)
app.post('/newstudent',(req,res)=>{
    const student=new Student({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
        role:req.body.role
    })
    student.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

app.get('/students',(req,res)=>{
    Student.find().then(stud=>{
        res.send(stud)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

const teacherSchema = new mongoose.Schema({
    "name":"",
    "email":"",
    "password":"",
    "role":""
})

const Teacher = mongoose.model("Teacher",teacherSchema)
app.post('/newteacher',(req,res)=>{
    const teacher=new Teacher({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
        role:req.body.role
    })
    teacher.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

app.get('/teachers',(req,res)=>{
    Teacher.find().then(teach=>{
        res.send(teach)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});





app.listen(4000,()=>{
    console.log("working on 4000")
})