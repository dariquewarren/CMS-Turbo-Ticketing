var loginForm = document.getElementById('testLoginForm')


var userEmail = document.getElementById('emailInput')
var userpword = document.getElementById('passwordInput')


var userProfileForm = document.getElementById('userProfileForm')

userProfileForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  fetch('users/me').then((response)=>{
    response.json().then((data)=>{
      console.log(data)
    })
  })
})



loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
var data = {
    email : emailInput.value,
    password : userpword.value
}






fetch(`/users/login`, {
    method: 'POST', // or 'PUT'

  
  credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: "follow",
    body: JSON.stringify(data),
  })
})
