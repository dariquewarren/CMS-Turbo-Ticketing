var createUserForm = document.getElementById('createUserForm')
var nameInput = document.getElementById('createNameInput')
var emailInput = document.getElementById('createEmailInput')
var passwordInput = document.getElementById('createPasswordInput')

var testUser = {
    name: nameInput.nodeValue,
    email: emailInput.nodeValue,
    password: passwordInput
}

createUserForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    var testUser = {
        name: nameInput.nodeValue,
        email: emailInput.nodeValue,
        password: passwordInput
    }
    console.log(testUser)
})