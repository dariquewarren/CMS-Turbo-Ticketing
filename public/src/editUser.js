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
    window.location.assign('/index')
    })
  })
  // buttons
  
   

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
           welcomeDiv.innerHTML = `Welcome back, ${data.name}`
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
welcomeDiv.innerHTML='UPDATE SUCCESSFUL...'

setTimeout(()=>{
location.assign('/profile')
}, 2000)

      })
  })
})



