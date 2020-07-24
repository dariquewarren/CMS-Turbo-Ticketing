


var userForm = document.getElementById('createUserForm')
var usertitle = document.getElementById('userTitle')
var userabout = document.getElementById('userAbout')
var username = document.getElementById('userName')
var useremail = document.getElementById('userEmail')
var userpassword = document.getElementById('userPassword')
var birthdayInput = document.getElementById('birthdayInput')
var birthmonthInput = document.getElementById('birthmonthInput')

userForm.addEventListener('submit', (e)=>{
    e.preventDefault()

  var realDay = birthdayInput.value
        var realMonth = birthmonthInput.value
        var realBirthday = realDay +'-'+ realMonth
        console.log(realBirthday)
       console.log(typeof realBirthday)

var ddw = {
  about: userabout.value,
  jobtitle: usertitle.value,
  birthday: realBirthday,
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
        console.log('Success:', data);
       if(!data.email){
         location.assign('/register')
       }
        location.assign('/login')
      }).catch((error) => {
        console.error('Error:', error);
      })
})