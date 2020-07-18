
var completedInput = document.getElementById('completedInput')
var descriptionInput = document.getElementById('descriptionInput')
var titleInput = document.getElementById('titleInput')
var createTaskForm = document.getElementById('createTaskForm')
// var messageOne = document.getElementById('testParagraph')
// var testDiv = document.getElementById('testDiv')
// var testList = document.getElementById('testList')





// buttons



createTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    var ddw = {

details: descriptionInput.value,
completed: completedInput.value,
title: titleInput.value
    }
    

    fetch(`/tasks`,{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(ddw),
      }).then(response => response.json()).then(data => {
    console.log(document.cookie) 
       console.log('Success:', data);
      }).catch((error) => {
        console.error('Error:', error);
      })
      
 })


//   delete button
