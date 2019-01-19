const express = require('express');
const Egypt = require('../models/Egypt');
const router = express.Router();

router.get('/', (req,res)=>{
    Egypt.find({}, (err, egypt)=>{
        if(err){
            res.send(err);
        }
        res.render('index.ejs', {
            egypt: egypt
        })
    })
});

router.get('/new', (req,res)=>{
    res.render('new.ejs');
});

router.post('/', (req,res)=>{
    if (req.body.isAlive === 'on'){
        req.body.isAlive = true;
    } else {
        req.body.isAlive = false;
    }
    Egypt.create(req.body, (err, egypt)=>{
        if(err){
            res.send(err);
        }
        console.log(`created: ${egypt}`);
        res.redirect('/egypt');
    })
});

router.get('/:id', (req,res)=>{
    Egypt.findById(req.params.id, (err, thisEgypt)=>{
        if(err){
            res.send(err);
        }
        res.render('show.ejs', {
            egypt: thisEgypt
        })
    })
});

router.get('/:id/edit', (req,res)=>{
    Egypt.findById(req.params.id, (err, thisEgypt)=>{
        if(err){
            res.send(err);
        }
        res.render('edit.ejs', {
            egypt: thisEgypt
        })
    })
});

router.put('/:id', (req,res)=>{
    if(req.body.isAlive === 'on'){
        req.body.isAlive = true;
    }else {
        req.body.isAlive = false;
    }
    Egypt.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, newEgypt)=>{
        if(err){
            res.send(err);
        }
        console.log(newEgypt);
        res.redirect('/egypt');
    })
});

router.delete('/:id', (req,res)=>{
    Egypt.findByIdAndRemove(req.params.id, (err, egypt)=>{
        if(err){
            res.send(err);
        }
        console.log(`deleted ${egypt}`);
        res.redirect('/egypt');
    })
})
module.exports = router;