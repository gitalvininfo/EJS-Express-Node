const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))


// Templating engine
app.set('views', './public/src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))


// Routes
const newsRouter = require('./public/src/routes/news');
app.use('/', newsRouter);
app.use('/article', newsRouter);


// Listen to port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})