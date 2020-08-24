var checkForCookie = ()=>{
  if(!document.cookie){
    return location.assign('/login')
  }
  }
  
  checkForCookie()


  var welcomeDiv = document.getElementById('welcomeID')
  var logoutButton = document.getElementById('logoutButton')

  logoutButton.addEventListener('click', (e)=>{
    e.preventDefault()
    fetch('/users/logout').then((response)=>{
      console.log(document.cookie)
    alert('you are now logged out')
    window.location.assign('/editUser')
    })
  })
  // buttons
  
   

var updateUserForm = document.getElementById('updateUserForm')

var completedInput = document.getElementById('completedInput')
var userName = document.getElementById('userName')
var jobTitle = document.getElementById('jobTitle')
var userAbout = document.getElementById('userAbout')
var userAge = document.getElementById('userAge')

var deleteAvatar = document.getElementById('deleteAvatar')

var getUserData = ()=>{
    fetch('/users/me').then((response)=>{
        response.json().then((data)=>{
            console.log('get',data)
            welcomeDiv.innerHTML = ``
            var avatarImage = document.createElement('img')
            var nameParagraph = document.createElement('p')
            var avatarButton = document.createElement('button')
            avatarButton.setAttribute('class', 'border border-danger btn btn-dark text-success')
    
            avatarImage.src = `/users/${data._id}/avatar`
            nameParagraph.innerHTML = `Welcome ${data.name}`
            avatarButton.append(avatarImage)
            avatarButton.append(nameParagraph)
            welcomeDiv.append(avatarButton)
    avatarButton.addEventListener('click', (e)=>{
      e.preventDefault()
      location.assign('/profile')
      }) 
    })
  })
}
getUserData()

deleteAvatar.addEventListener('click', (e)=>{
  e.preventDefault()
  fetch(`users/me/avatar`,{
    method: 'DELETE', // or 'PUT'
    headers: {
      'Content-Type': 'image/png',
      }
 
  }).then((response)=>{
    console.log(response)
    location.assign('/editUser')
  }).catch((e)=>{
    console.log(e)
  })
})

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
welcomeDiv.innerHTML='UPDATE SUCCESSFUL...'

setTimeout(()=>{
location.assign('/profile')
}, 2000)

      })
  })
})



