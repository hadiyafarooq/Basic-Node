/*const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blogs')
.then(()=>console.log("connected successfully!"))
.catch((err)=>console.log(err));*/

const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/blogs");
async function run() {
  try 
  {
    await client.connect();
    const db = client.db("blogs");
    const blogs = db.collection("posts");

    const temp = blogs.find();
    await temp.forEach(console.log);
    //module.exports = temp;
  } 
finally 
  {
    await client.close();
  }
}
run().catch(console.dir);

blogs = [{
    title:"Getting started with Python",
    content: "This is python content",
    slug:"learn-python"
},
{
    title:"Getting started with Java",
content: "This is java content",
slug:"learn-java"
},
{
    title:"Getting started with Php",
content: "This is php content",
slug:"learn-php"
},
{
    title:"Getting started with C++",
content: "This ic c++ content",
slug:"learn-c++"
}

]

module.exports = blogs;