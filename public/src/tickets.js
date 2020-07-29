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

var dropdownMenuButton = document.getElementById('dropdownMenuButton')

var completedInput = document.getElementById('completedInput')
var detailsInput = document.getElementById('detailsInput')
var titleInput = document.getElementById('titleInput')
var taskIDOutput = document.getElementById('taskIDOutput')
var createTaskForm = document.getElementById('createTaskForm')


var ticketDropdown = document.getElementById('ticketDropdown')

var completed = document.getElementById('completed')
var details = document.getElementById('details')
var title = document.getElementById('title')
var id = document.getElementById('id')

var titleHeader = document.getElementById('titleHeader')
var detailsHeader = document.getElementById('detailsHeader')
var completedHeader = document.getElementById('completedHeader')

var myWindow = window.location.search

var completedCheckbox = document.getElementById('completedCheckbox')

console.log('checkbox:', completedCheckbox.checked)

var retrieveTicket = ()=>{
    var id = myWindow
    console.log('amazing')
    console.log(myWindow.substring(1))
    fetch(`/tasks/${myWindow.substring(1)}`).then((response)=>{
        response.json().then((data)=>{
            console.log('this is from retrieve ticket function', data)
            titleInput.innerHTML = `${data.title}`
            detailsInput.innerHTML = `${data.details}`
            
            titleHeader.innerHTML = `${data.title}`
            detailsHeader.innerHTML = `${data.details}`
            completedHeader.innerHTML = `${data.completed}`
        })
    })
}
retrieveTicket()


createTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    var ddw = {
        title: titleInput.value,
        details: detailsInput.value,
        completed: completedCheckbox.checked
    }
    console.log(ddw)
    fetch(`/tasks/${myWindow.substring(1)}`, {
        method: 'PATCH', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ddw),
      }).then((response)=>{
          response.json().then((data)=>{
    console.log('this is from update', data)
 
    location.assign('/index')
          }).catch((e)=>{
            console.log(e)
        })
      })
})


