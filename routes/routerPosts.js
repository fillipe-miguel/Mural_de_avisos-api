const express = require("express");
const router = express.Router();
const modelPost = require("../model/posts");

router.get("/all", (req, res) => {
    res.json(modelPost.getAll());
});

router.post("/new", (req, res) => {
    modelPost.newPost(req.body.name, req.body.description);
    res.send("Post adicionado!");
});

router.delete("/delete", (req, res) => {
    modelPost.deletePost(req.body.id);
    res.send("Post Deletado!");
});

module.exports = router;
