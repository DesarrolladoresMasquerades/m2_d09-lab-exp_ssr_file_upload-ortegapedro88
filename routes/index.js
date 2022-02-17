const PostModel = require("../models/Post.model");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  PostModel.find()
  .then((posts=>{
    console.log(posts)
    
    res.render("../views/index", {posts});
  }))
});

module.exports = router;
