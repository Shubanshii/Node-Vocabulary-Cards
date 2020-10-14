const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// app.use(express.static(path.join(__dirname, '../public')))

// root url

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Chris',
//         age: 31
//     }, {
//         name: 'Jake'
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

app.get('', (req, res) => {
    res.render('index', {
        title: 'Vocabulary Cards',
        name: 'Chris Day'
    })
})

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Chris Day'
//     })
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         title: 'Help',
//         message: 'How can we help you?',
//         name: 'Chris Day'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         location: 'Ho Chi Minh',
//         forecast: 'Rain'
//     })
// })

// app.get('/help/*', (req, res) => {
//     res.render('help', {
//         title: '404',
//         message: 'Help article not found',
//         name: 'Chris Day'
//     })
// })

// app.get('*', (req, res) => {
//     res.render('help', {
//         title: '404',
//         message: 'Page not found',
//         name: 'Chris Day'
//     })
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})