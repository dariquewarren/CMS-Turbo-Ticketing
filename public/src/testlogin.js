var loginForm = document.getElementById('loginForm')
var emailInput = document.getElementById('emailInput')
var passwordInput = document.getElementById('passwordInput')


loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()

/*
{
    "name":"darique warren",
    "email": "ddwarren@swag.com",
    "password": "harlemworld"
} 

*/

var ddw = {
    email: emailInput.value,
    password: passwordInput.value
}
console.log(ddw)
    fetch('/users/login',{
        method: 'POST', // or 'PUT' 
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(ddw)
      }).then((response) => {response.json()}).then(data => {
        console.log('Success:', data);
       alert(`$ Thank you for signing in`)
      location.assign('/index.html')
      }).catch((error) => {
        console.error('Error:', error);
        alert('please try again',error )
      })
      
    
})

var logoutForm = document.getElementById('logoutForm')

logoutForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  
fetch('/users/logout').then((response)=>{
  console.log(document.cookie)
alert('you are now logged out')
window.location.assign('/index.html')
})

})

