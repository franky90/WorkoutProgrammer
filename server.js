const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
['js', 'css', 'images'].forEach(folderName => app.use(`/${folderName}`, express.static(folderName)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.get("/", function(req,res){
    res.sendFile(__dirname  + "/index.html");
})
app.post("/api/form", function(req,res){
    const body = req.body
    res.status(200).send({body: body})
})
app.listen(3000, function(){
    console.log(`Application started on port: ${port}`)
})