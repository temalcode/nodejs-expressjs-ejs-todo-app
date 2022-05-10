const express = require('express')
const router = express.Router()
const model  = require('../Model/model.js')

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

router.post('/create', async function(req, res){
    try{
        const newTodo = new model({
            todo: DOMPurify.sanitize(req.body.todo)
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