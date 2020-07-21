const validator = require('validator')
const mongoose = require('mongoose')



/*
GOAL REFACTOR TASK MODEL TO ADD TIMESTAMPS

1. CREATE SCHEMA
2. SETUP TIMESTAMPS
3. CREATE TASKS FROM POSTMAN TO CHECK WORK

*/

const taskSchema = mongoose.Schema({
     title: {
      type: String,
      required: true,
      trim: true
   },
  completed: {
      type: Boolean,
      default: false,
      required: true
      
      },
      details: {
         type: String,
         required: true,
         trim: true
      },
       owner: {
     type:  mongoose.Schema.Types.ObjectId,
     ref: 'User'
  }
  
      
   },  {
      timestamps: true
   })

const Tasks = mongoose.model('Tasks', taskSchema )

   module.exports = Tasks