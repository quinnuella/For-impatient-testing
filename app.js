const express = require('express')
const app = express ()
app.listen(4000)

//register view engine
app.set('view engine', 'ejs')

//middleware &static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

//9.1
app.get('/chap1', (req, res) => {
  res.render('images')
})