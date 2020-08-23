const path = require('path')
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const hbs = require('express-handlebars')
const app = express( )
const multer = require('multer')
const upload = ({
    limits: {
        fileSize: 1000000
    }, 
    fileFilter(req, file, cb){
if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return cb(new Error('something went wrong. check file size and file type'))
    }
   return cb(undefined, true)
    }
    
})
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));



app.engine( 'hbs', hbs( {
    extname: '.hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/pages/',
    partialsDir: __dirname + '/views/partials/'
  }));


app.set('view engine', 'hbs')

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res)=>{
  req.user.avatar = req.file.buffer
   await req.user.save()
   
   
    res.send()
}, (error, res, next)=>{
res.status(400).send({ error: error.message})
})

router.delete('/users/me/avatar', auth, async (req, res)=>{
    req.user.avatar = undefined
     await req.user.save()
     
     
      res.send()
  })
 
router.get('/users/:id/avatar', async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw new Error()
        }

        res.set('Content-Type', 'image/jpg')
        res.send(user.avatar)

    }catch(e){
        res.status(404).send()
    }
})




router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.cookie('auth_token', token)
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users', async (req,res)=>{
    
    try{
        
const user = await User.findById({})
if(!user){
res.status(404).send()
        }
res.status(200).send(user)
    }catch(e){
        res.status(500).send(e)
    }
    
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
       
        res.cookie('auth_token', token)
        res.send(user)
        res.render('/index.html')
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/users/logout', auth, async (req, res) => {
    res.clearCookie('auth_token')
    res.send()
})


router.post('/users/logoutAll', auth, async (req, res) => {
    try {
    req.user.tokens = []
    await req.user.save()
    res.send()

    } catch(e){
res.status(500).send()
    }
})


router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})


/*

GOAL REFACTOR THE UPDATE PROFILE ROUTE HANDLER

1. UPDATE THE URL TO USERS/ME
2. ADD THE AUTHENTICATION MIDDLEMARE INTO THE MIX
3. USE THE EXISTING USER DOCUMENT INSTEAD OF USING PARM.ID
4. TEST YOUR WORK IN POSTMAN

*/

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'jobtitle', 'about', 'birthday']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        

        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
        if (!user) {
            return res.status(404).send()
        }

        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user._id)
        if(user){
            console.log(req.user.id)
            res.clearCookie('auth_token')
        }
        
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router