const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send({ "slackUsername": "lawalH", "backend": true, "age": 21, "bio":"a fullstack dev" })
})

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server is listening on localHost ${port}`));
