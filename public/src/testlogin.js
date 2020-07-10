var loginForm = document.getElementById('testLoginForm')


var userEmail = document.getElementById('emailInput')
var userpword = document.getElementById('passwordInput')

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
var data = {
    email : emailInput.value,
    password : userpword.value
}



fetch(`/users/login`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json()).then(data => {
    console.log('Success:', data);
  }).catch((error) => {
    console.error('Error:', error);
  })
})
