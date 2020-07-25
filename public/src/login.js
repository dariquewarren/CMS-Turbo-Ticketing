console.log(document.cookies)


let loginForm = document.getElementById('loginForm')
let emailInput = document.getElementById('emailInput')
let passwordInput = document.getElementById('passwordInput')
let alertDiv = document.getElementById('alertDiv')
let notLoggedInDiv = document.getElementById('notLoggedInDiv')
loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    var  successDiv = document.createElement('div')
    successDiv.setAttribute('class', 'bg-dark text-primary ')
    successDiv.setAttribute('role','alert')

var ddw = {
    email: emailInput.value,
    password: passwordInput.value
}

    fetch('/users/login',{
        method: 'POST', // or 'PUT' 
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(ddw)
      }).then(data => {
        console.log('Success:', data);
            

        /*
 <div class="" role="alert">
  This is a primary alert—check it out!
</div>

*/
var timedreload = ()=>{
  
setTimeout(()=>{
  location.assign('/login')
},3000)
}
if(document.cookie.length === 0){
notLoggedInDiv.innerHTML = `incorrect Email/Password. Redirecting...`
 return timedreload()
} else{
  notLoggedInDiv.innerHTML = `loading tickets.......`
 
}

setTimeout(()=>{
  location.assign('/index')
}, 3000)




     
       
      
      
      }).catch((error) => {
        console.error('Error:', error);
        
     
      })
      
    
})

var signupForm = document.getElementById('signupForm')

signupForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  
window.location.assign('/register')

})

