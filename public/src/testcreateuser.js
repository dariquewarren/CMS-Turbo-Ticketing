var createUserForm = document.getElementById('testForm')
var nameInput = document.getElementById('createNameInput')
var emailInput = document.getElementById('createEmailInput')
var passwordInput = document.getElementById('createPasswordInput')


var testForm = document.getElementById('testForm2')
var testNameInput = document.getElementById('testName')
var testEmailInput = document.getElementById('testEmail')
var testPasswordInput = document.getElementById('testPassword')



createUserForm.addEventListener('submit', (e)=>{
  e.preventDefault()
    const data = { name : nameInput.value,
      email : emailInput.value,
      password : passwordInput.value };
  
  fetch('/users', {
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
//    var userName= 
//    var userEmail=
//    var userPassword=

     
 
