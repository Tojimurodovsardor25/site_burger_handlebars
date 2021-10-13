/* Burger Handlebars
//
-- Readmie.md Server port -- 3000 -->
//
=========================================================================
*/
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
// Routers
// const homeRoter = require('./routes/home')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// app.use('/', homeRoter)


app.listen(port, () => {
    console.log(`Express working on ${port} port`);
})
