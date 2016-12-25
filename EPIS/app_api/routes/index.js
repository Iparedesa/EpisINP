var express = require('express');
var router = express.Router();
var ctrlBlog=require('../controllers/blog')

router.get('/posts',ctrlBlog.getPosts);
router.post('/posts:postid',ctrlBlog.crearPosts);
router.get('/posts:postid',ctrlBlog.modificarPosts);
router.get('/posts:postid',ctrlBlog.borrarPosts);



module.exports = router;
