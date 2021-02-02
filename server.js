const express = require("express")
const app = express()
const port = 3000
const staticFolders = ['js', 'css', 'images']
staticFolders.forEach(folderName => app.use(`/${folderName}`, express.static(folderName)))

app.use(express.static('public'))
app.get("/", function(req,res){
    res.sendFile(__dirname  + "/index.html");
})

// Server
app.get('/api/form', (req, res) => {
    res.send({
        isWorking: true,
        msg: "Hello World"
    })
})

app.listen(3000, function(){
    console.log(`Application started on port: ${port}`)
})