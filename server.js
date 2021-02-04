const express = require("express")
const cors = require('cors')
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
});


(function SetApplicationMiddleware(App) {
        // Do I need to add this? - Added the cors dep
        App.use(cors())
        // Already did this...
        // App.use(express.urlencoded({ extended: true }))// Parse URL-encoded bodies
        // App.use(express.json())
        App.use(( req , res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            if(req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
                return res.status(200).json({})
            }
            next();
        })

})(app);

app.listen(3000, function(){
    console.log(`Application started on port: ${port}`)
})