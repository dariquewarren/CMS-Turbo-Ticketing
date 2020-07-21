
var updateUserForm = document.getElementById('updateUserForm')

var completedInput = document.getElementById('completedInput')
var userName = document.getElementById('userName')
var jobTitle = document.getElementById('jobTitle')
var userAbout = document.getElementById('userAbout')
var userAge = document.getElementById('userAge')

var realAge = userAge.value
var realName = userName.value
var realJob = jobTitle.value
var realAbout = userAbout.value

var getRealage = ()=>{
    if (!userAge.value){
        realAge = '1999999'
    } else{
        realAge =userAge.value
    }
}
var getRealName = ()=>{
    if(!userName.value){
        realName = 'noname'
    } else{
        realName = userName.value
    }
}

var getRealJob =()=>{
    if(!realJob.value){
        realJob = 'none'
            } else{
                realJob = jobTitle.value
            }
}

var getRealAbout=()=>{
     if(!realAbout.value){
        realAbout = 'private'
            } else{
                realAbout = userAbout.value
            }
}
updateUserForm.addEventListener('submit', (e)=>{
    e.preventDefault()
getRealage()
getRealName()
getRealJob()
getRealAbout()
var userUpdate = {
    age: realAge,
  name: realName,
  jobtitle: realJob,
  about: realAbout,

}

console.log(userUpdate)


fetch(`/users/me`, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userUpdate),
  }).then((response)=>{
      response.json().then((data)=>{
console.log('success',data)
      })
  })
})

