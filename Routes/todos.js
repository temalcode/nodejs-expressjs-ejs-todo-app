const express = require('express')
const router = express.Router()
const model  = require('../Model/model.js')


router.post('/create', async function(req, res){
    try{
        const newTodo = new model({
            todo: req.body.todo
        })
        await newTodo.save()
        res.status(201).redirect('/')
    }catch(err){
        res.send(err.message)
    }    
})

router.delete('/del::id', async function(req, res){
    try{
        await model.findByIdAndDelete(req.params.id)  
        res.redirect('/')
    }catch(err){
        res.send(err.message)
    }
    
})

module.exports = router