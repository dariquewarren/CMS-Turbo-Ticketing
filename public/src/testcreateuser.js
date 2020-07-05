var createUserForm = document.getElementById('createUserForm')
var nameInput = document.getElementById('createNameInput')
var emailInput = document.getElementById('createEmailInput')
var passwordInput = document.getElementById('createPasswordInput')



createUserForm.addEventListener('submit', (e)=>{
    e.preventDefault()
//    var userName= 
//    var userEmail=
//    var userPassword=
   
    var testUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    console.log(testUser)
})