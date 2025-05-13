//imports
const postsRouter = require("./routers/posts");

const express = require("express");
const app = express();
const port = 3000;

//static assets middleware
app.use(express.static("public"));

//routers
app.use("/posts", postsRouter);

//server in ascolto
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta  ${port}`);
});
