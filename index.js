const PORT = 3212;
const express = require("express");
const app = express();
const routerPosts = require("./routes/routerPosts");
const path = require("path");

app.use(express.json());

app.use("/posts", routerPosts);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});
