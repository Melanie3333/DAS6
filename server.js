var express = require('express')
var app = express()
var port = 3000


app.get('/login', (req, res) => {
  res.send('You have already logged in')
})

app.get('/logout', (req, res) => {
   res.send('Logout Success')
 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})