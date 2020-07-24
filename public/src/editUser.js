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
    mainHeader.setAttribute('class','text-danger')
    mainHeader.innerHTML = `<strong>Logging out</strong>`

    setTimeout(()=>{
     
      window.location.assign('/login')
      
    }, 3000)
  })
})

  // buttons
  var welcome = ()=>{
    fetch('/users/me').then((response)=>{
      response.json().then((data)=>{
        console.log(data)
        welcomeDiv.innerHTML = `${data.name} Welcome to Turbo Ticket`
      })
    })
  }
  welcome()
  
  var welcomeDiv = document.getElementById('welcomeID')
  var logoutButton = document.getElementById('logoutButton')

  logoutButton.addEventListener('click', (e)=>{
    e.preventDefault()
    fetch('/users/logout').then((response)=>{
      console.log(document.cookie)
    alert('you are now logged out')
    window.location.assign('/index')
    })
  })
  // buttons
  var welcome = ()=>{
    fetch('/users/me').then((response)=>{
      response.json().then((data)=>{
        console.log(data)
        welcomeDiv.innerHTML = `${data.name} Welcome to Turbo Ticket`
      })
    })
  }
  welcome()
   

var updateUserForm = document.getElementById('updateUserForm')

var completedInput = document.getElementById('completedInput')
var userName = document.getElementById('userName')
var jobTitle = document.getElementById('jobTitle')
var userAbout = document.getElementById('userAbout')
var userAge = document.getElementById('userAge')





var getUserData = ()=>{
    fetch('/users/me').then((response)=>{
        response.json().then((data)=>{
            console.log('get',data)
           
           userName.value =`${data.name}`
           jobTitle.value =`${data.jobtitle}`
           userAbout.value = `${data.about}`
        })
    })
}
getUserData()


updateUserForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    var realDay = birthdayInput.value
    var realMonth = birthmonthInput.value
    var realBirthday = realDay +'-'+ realMonth
    console.log(realBirthday)
   console.log(typeof realBirthday)
var userUpdate = {
    birthday: realBirthday,
  name: userName.value,
  jobtitle: jobTitle.value,
  about: userAbout.value,

}

 console.log(userUpdate)


fetch(`/users/me`, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userUpdate),
  }).then((response)=>{
      response.json().then((data)=>{
console.log('success',data)
alert('UPDATE SUCCESSFUL')
location.assign('/editUser')
      })
  })
})



