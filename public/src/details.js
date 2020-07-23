  
var updateUserForm = document.getElementById('updateUserForm')

var completedInput = document.getElementById('completedInput')
var userName = document.getElementById('userName')
var jobTitle = document.getElementById('jobTitle')
var userAbout = document.getElementById('userAbout')
var userAge = document.getElementById('userAge')



var birthdayInput = document.getElementById('birthdayInput')
var birthmonthInput = document.getElementById('birthmonthInput')



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
location.assign('/details.html')
      })
  })
})



