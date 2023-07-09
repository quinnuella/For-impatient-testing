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
app.get('/section1', (req, res) => {
  res.render('images')
})

//9.2
app.get('/section2', (req, res) => {
  res.render('images2')
})

//9.6
app.get('/section6', (req, res) => {
  res.render('images6')
})

//9.10
app.get('/section10', (req, res) => {
  res.render('images10')
})

//9.11
app.get('/section11', (req, res) => {
  res.render('images11')
})

//9.12
app.get('/section12', (req, res) => {
  res.render('images12')
})