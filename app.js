const express = require('express')
const app = express()
const port = 3000




app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    // res.send('Halaman About')
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    // res.send('Halaman Contact')
    res.sendFile('./contact.html', {root: __dirname})
})

app.get('/product/', function (req, res)  {
    res.send(`Product id : ${req.query.id} <br> category : ${req.query.category}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('Not Found : 404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})