const express = require('express')
const router = express.Router()

router.post('/create',(req,res,next)=>{
    const {name,email} = req.body
    console.log(name)

    res.json( {name : name, email :email})


})

router.get('/read',(req,res,next)=>{
    const {name,email} = req.body
    res.json( {name : name, email :email})
})

router.put('/update',(req,res,next)=>{
    const {name,email} = req.body
    res.json( {name : name, email :email})
})

router.delete('/delete',(req,res,next)=>{
    const {name,email} = req.body
    res.json({name : name, email :email})
})

module.exports = router;

