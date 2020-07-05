var loginForm = document.getElementById('testLoginForm')
var emailInput = document.getElementById('emailInput')
var password = document.getElementById('passwordInput')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
   var userEmail = emailInput.value
 var userPassword = password.value
// messageTwo.textContent = `..TRYING..TO..GET..WEATHER..`




fetch(`/users/login?${userEmail}?${userPassword}`).then((response)=> {
    
    
    response.json().then((data)=>{
       if(data.error) {
       return    messageOne.textContent = `${data.error}`
                      }
 console.log(data)
//        messageOne.textContent = `${data.location}`
//        messageTwo.textContent = `${data.forecast}`
       
        })
    })  

})
