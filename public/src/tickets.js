

var descriptionInput = document.getElementById('descriptionInput')
var titleInput = document.getElementById('titleInput')
var createTaskForm = document.getElementById('createTaskForm')
// var messageOne = document.getElementById('testParagraph')
// var testDiv = document.getElementById('testDiv')
// var testList = document.getElementById('testList')

var completedCheckbox = document.getElementById('completedCheckbox')



// buttons

console.log(completedCheckbox.checked)

createTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    var ddw = {

details: descriptionInput.value,
completed: completedCheckbox.checked,
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
       if(!data.title){
       return alert('ALL FIELDS REQUIRED.')
       }else {
         alert(`${data.title} has been CREATED`)
        window.location.assign('/index')
       }

      }).catch((error) => {
        console.error('Error:', error);
      })
      
 })


//   delete button
