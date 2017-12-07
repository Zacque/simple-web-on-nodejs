var express = require("express");




var app = express()

app.get('/', (req,res) => {
    res.send({
        test: 'OK'
    })
})
var template = '<p> Please find the template</p>
app.listen(8080, () => console.log("Server is running"))



