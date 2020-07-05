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
const port = process.env.PORT || 3000
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



const auth = require('./middleware/auth')
const router = new express.Router()



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)






app.get('/',(req, res )=>{
    res.render('index',{layout: 'index'})
})

app.get('/categories.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/categories.hbs' )
     res.render('categories')
})

app.get('/details.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('main', {layout: 'details'})
})

app.get('/index.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('index', {layout: 'index'})
})


app.get('/login.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('login', {layout: 'login'})
})
app.get('/posts.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('posts', {layout: 'posts'})
})
app.get('/profile.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('profile', {layout: 'profile'})
})

app.get('/settings.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('settings', {layout: 'settings'})
})
app.get('/users.html',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('users', {layout: 'users'})
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


