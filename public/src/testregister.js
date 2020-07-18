/*
{
    "name":"darique warren",
    "email": "ddwarren@swag.com",
    "password": "harlemworld"
} 

*/


var userForm = document.getElementById('createUserForm')
var username = document.getElementById('userName')
var useremail = document.getElementById('userEmail')
var userpassword = document.getElementById('userPassword')

userForm.addEventListener('submit', (e)=>{
    e.preventDefault()

/*
{
    "name":"darique warren",
    "email": "ddwarren@swag.com",
    "password": "harlemworld"
} 

*/

var ddw = {
    name: username.value,
    email: useremail.value,
    password: userpassword.value
}

    fetch('/users',{
        method: 'POST', // or 'PUT' 
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(ddw)
      }).then(response => response.json()).then(data => {
        console.log('Success:', data);
        
      }).catch((error) => {
        console.error('Error:', error);
      })
})