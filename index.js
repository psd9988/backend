require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('Twitter Url')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please Login To This Page</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send('<a target="_blank" href="www.youtube.com"> YouTube </a>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})