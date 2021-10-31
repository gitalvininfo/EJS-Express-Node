const express = require('express')

const app = express()
const port = 5000


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))


// Templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs')


// Routes
const newsRouter = require('./src/routes/news');
app.use('/', newsRouter);


// Listen to port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})