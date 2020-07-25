var checkForCookie = ()=>{
  if(!document.cookie){
    return location.assign('/login')
  }
  }
  
  checkForCookie()

  var welcomeDiv = document.getElementById('welcomeID')
var logoutButton = document.getElementById('logoutButton')
var mainHeader = document.getElementById('mainHeader')
logoutButton.addEventListener('click', (e)=>{
  e.preventDefault()
  fetch('/users/logout').then((response)=>{
    console.log(document.cookie)
    mainHeader.setAttribute('class','text-danger text-center')
    mainHeader.innerHTML = `<strong>Logging out</strong>`

    setTimeout(()=>{
     
      window.location.assign('/login')
      
    }, 1500)
  })
})

  // buttons
  var welcome = ()=>{
    fetch('/users/me').then((response)=>{
      response.json().then((data)=>{
        console.log(data)
        welcomeDiv.innerHTML = `${data.name}: ${data.jobtitle}`
      })
    })
  }
  welcome()
   

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
