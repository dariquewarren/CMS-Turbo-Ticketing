var loginForm = document.getElementById('loginForm')
var emailInput = document.getElementById('emailInput')
var passwordInput = document.getElementById('passwordInput')


loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()


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
     if(!document.cookie){
     return  alert('bad login')
     }
        alert(`$ Thank you for signing in`)
      
      }).catch((error) => {
        console.error('Error:', error);
        alert('please try again',error )
      })
      
    
})

var signupForm = document.getElementById('signupForm')

signupForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  
window.location.assign('/register')

})

