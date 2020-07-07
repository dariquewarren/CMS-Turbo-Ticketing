var loginForm = document.getElementById('testLoginForm')


var userEmail = document.getElementById('emailInput')
var userpword = document.getElementById('passwordInput')

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()

var email = emailInput.value
var password = userpword.value


fetch(`/users/login?email=${email}&password=${password}`).then((response)=> {
    console.log(response)
    
     
})
})
