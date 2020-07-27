const path = require('path')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')
const Task = require('./models/task')
const User = require('./models/user')
const hbs = require('handlebars')
const exphbs = require('express-handlebars')
const express = require('express')
require('./db/mongoose')
const app = express()
const port = process.env.port || 3000

const cookieParser = require('cookie-parser')
//DEFINE PATHS FOR EXPRESS CONFIG

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// SETS UP HANDLEBARS ENGINE AND VIEWS LOCATION

app.engine( 'hbs', exphbs({extname:'.hbs' ,layoutsDir: 
viewsPath, partialsDir: partialsPath, defaultLayout: 'main'}));
app.set('view engine','hbs')
app.set('views', viewsPath)
express.static(__dirname)

// SETUP STATIC DIRECTORY TO SERVE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(userRouter)
app.use(taskRouter)





app.get('/',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('login', {layout: 'login'})
})

app.get('/profile',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('profile', {layout: 'profile'})
})

app.get('/tickets',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('tickets',{layout: 'tickets'})
    
})


app.get('/register',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/categories.hbs' )
     res.render('register', {layout: 'register'})
})



app.get('/edituser',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('edit', {layout: 'edit'})
})

app.get('/index',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('index', {layout: 'index'})
})


app.get('/login',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('login', {layout: 'login'})
})
app.get('/createticket',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('createTicket', {layout: 'createTicket'})
})
app.get('/profile.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('profile', {layout: 'profile'})
})








app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})



//  const main = async ()=>{
//     //  const task = await Task.findById('5ef80ec2fe11913240ef03c7')
//     //  await task.populate('owner').execPopulate()
//     //  console.log(task.owner)

//     const user = await User.findById('5ef8bf9ec335282c789c01f4')
//     await user.populate('tasks').execPopulate()


//     console.log(user.tasks)
    
    
//  }

//  main()


