const express = require('express');
const router = express.Router();

const Post = require('../Models/post')


// Get all Post 

router.get('/', async(req , res ) => {
    try{
       const posts = await Post.find();
       res.json(posts);
    }
    catch (error){
res.status(500).json({message : error.message})
    }
})


// get single post by ID 

router.get('/:id', async(req , res) => {
    try{
         const post = await Post.findById(req.params.id);
          if(!post ){
            return res.status(404).json({message:"Post is Not Found"})
          }
          res.json(post);
    }
    catch(error){
         res.status(500).json({message:error.message})
    }
})


// Create New Post 


