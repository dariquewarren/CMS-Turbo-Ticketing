/*
{
    "name":"darique warren",
    "email": "ddwarren@swag.com",
    "password": "harlemworld"
} 

*/


var userForm = document.getElementById('createUserForm')
var userage = document.getElementById('userAge')
var usertitle = document.getElementById('userTitle')
var userabout = document.getElementById('userAbout')
var username = document.getElementById('userName')
var useremail = document.getElementById('userEmail')
var userpassword = document.getElementById('userPassword')

userForm.addEventListener('submit', (e)=>{
    e.preventDefault()

/*
{
  userage 
  usertitle
  userabout
    "name":"darique warren",
    "email": "ddwarren@swag.com",
    "password": "harlemworld"
} 

*/

var ddw = {
  about: userabout.value,
  jobtitle: usertitle.value,
  age: userage.value,
    name: username.value,
    email: useremail.value,
    password: userpassword.value
}
console.log(ddw.name)
    fetch('/users',{
        method: 'POST', // or 'PUT' 
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(ddw)
      }).then(response => response.json()).then(data => {
        console.log('Success:', data.user);
        alert(`${data.user.name}, THANK YOU FOR SIGNING UP! PLEASE LOGIN`)
        // location.assign('/login.html')
      }).catch((error) => {
        console.error('Error:', error);
      })
})