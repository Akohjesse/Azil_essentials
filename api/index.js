const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 2021;

if (process.env.NODE_ENV = "Production" || process.env.NODE_ENV === "staging"){
    app.use(bodyParser.json());
}

app.get('/api/users', (req, res) => {
    console.log('api/users called!')
    res.send('WELCOME TO THE API');
  })

app.listen(port, ()=>{
    console.log('Server started on port ' + port)
})