


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
      }).then(response => response.json()).then(data => {
        console.log('Success:', data);
        // alert(`${data.email} Thank you for signing in`)
      }).catch((error) => {
        console.error('Error:', error);
      })
      if(!document.cookie){
return alert('incorrect credentials')
      }
      window.location.assign('/index.html')
})

var logoutForm = document.getElementById('logoutForm')

logoutForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  
console.log(document.cookie)
document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
console.log(document.cookie)
alert(`YOU HAVE LOGGED OUT. COME BACK SOON`)
window.location.assign('index.html')

})


// var redirectForm = document.getElementById('redirectForm')

// redirectForm.addEventListener('submit', (e)=>{
//   e.preventDefault()
//   var id = 12345
// window.location.assign(`/index.html/${id}`)
// })