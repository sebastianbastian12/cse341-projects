const express =  require('express');
const router = express.Router();
const Post =  require('./models/POST');
const { json } = require('body-parser');


//Get back all the posts
router.get("/", async (req, res) => {
  try 
  {
    const posts = await Post.find();
    res.json(posts);

  } catch (error) 
  {
    res.json({messaage: err});
  }
  res.send("Second week learning from server! (POST)");
});

//Adding another parameter to the get call
router.get("/additionalPost", (req, res) => {
  res.send("Second week learning from server (Additional post)! (POST)");
});

//Submit a post 
router.post('/', async (req, res) =>
{
    const post = new Post({
        firstName: req.body.firstName,
        lastName: req.body.lastNameName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    });

    try
    {   
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch(err)
    {
        res.json({message: err})
    }
});

//Get a specific post
router.get('/:postId', async (req, res) =>
{
    try 
    {
        const post = await Post.findById(req.params.postId);
        res.json(post);
        console.log(res.params.postId);
    } catch (err) 
    {
        res.json({messaage: err});
    }

});

//Delete a post
router.delete('/:postId', async (req, res) =>
{
    try 
    {
      const deletePost = await Post.remove({ _id: req.params.postId });
      res.json(deletePost);

    } catch (err) 
    {
      res.json({ messsage: err });
    }
    
});

//Update a post
router.patch('/:postId', async (req, res) =>
{
    try 
    {
      const updatePost = await Post.updateOne(
        { _id: req.params.postId }, 
        {$set : {firstName: req.body.firstName}});
      res.json(updatePost);

    } catch (err) 
    {
      res.json({ message: err });
    }
})


//Exporting routes
module.exports = router;
