const express = require('express')
const path = require('path')

const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blogs')
.then(()=>console.log("connected successfully!"))
.catch((err)=>console.log(err));

const blogs=require('../Data/blogs')

router.get('/',(req,res)=>
{
    //res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})

router.get('/blogs',(req,res)=>
{
    // blogs.forEach(element => {
    //   console.log(element.title)  
    // });
    // res.sendFile(path.join(__dirname, '../templates/blogs.html'))
    res.render('blogs',{blogs:blogs})
})

router.get('/blogpost/:slug',(req,res)=>
{
    myblog=blogs.filter(e=>{
        return e.slug==req.params.slug
    })
    //res.sendFile(path.join(__dirname, '../templates/blogpost.html'))
    res.render('blogpost',{title:myblog[0].title,content:myblog[0].content})
})
module.exports = router;