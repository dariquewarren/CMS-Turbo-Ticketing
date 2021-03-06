const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Tasks = require('./task')

const userSchema = mongoose.Schema({
    name: {

        type: String,
       required: true,
        trim: true
        },
    email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate(value){
                if (!validator.isEmail(value)){
throw new Error('Invalid Email')
                }
                
            }
        },
    password: {
            type: String,
            trim: true,
            minlength: 6,
            required: true,
            validate(value){
                if(value.toLowerCase().includes('password') ){
                    throw new Error('Must be more than 6 characters and cannot conytain thwe word password')
                }
            }
        },
    birthday: {
            type: String,
            default: 'No birthday included',
            
       
        }, about: {
default: 'THIS PERSON IS PRIVATE. PLEASE RESPECT THAT.',
            type: String,
            trim: true
            },
            jobtitle: {
                default: 'JOB TITLE NEEDED',
                type: String,
                trim: true
                },
               
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }],
        avatar: {
            type: Buffer
        },
    },{
        timestamps: true
             
})

userSchema.virtual('tasks', {
    ref: 'Tasks',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}
 

userSchema.methods.generateAuthToken = async function () {
const user = this
const token = jwt.sign({ _id: user._id.toString() }, 'thisaseriesofcharacters')
user.tokens = user.tokens.concat({ token })
await user.save()
return token
}


userSchema.statics.findByCredentials = async (email, password)=>{
const user = await User.findOne({email})
if (!user){
    throw new Error('cant login')
}

const isMatch = await bcrypt.compare(password, user.password)
if (!isMatch){
    throw new Error('cant login')
}

return user
}

// hash plain text pword before saving

userSchema.pre('save', async function (next){
const user = this

if(user.isModified('password')){
user.password = await bcrypt.hash(user.password, 8)
}


next()
})

// Delete user tasks when user is removed

userSchema.pre('remove', async (req, res, next)=>{
const user = this
await Tasks.deleteMany({owner: user._id})
console.log(task)
next()
})

const User = mongoose.model('User', userSchema )


module.exports = User