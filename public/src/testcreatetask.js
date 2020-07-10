var createTaskForm = document.getElementById('createTaskForm')
var categoryInput =document.getElementById('categoryInput')
var completedInput = document.getElementById('completedInput')
var descriptionInput = document.getElementById('descriptionInput')
var createTaskButton = document.getElementById('createTaskButton')
createTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    var categoryInput = categoryInput.value
    var completedInput = completedInput.value
    var descriptionInput = descriptionInput.value
    
    console.log(categoryInput)
//     fetch(`/tasks?category=${categoryInput}&description=${descriptionInput}&completed=${completedInput}`, {
//         method: 'post',
//         body: JSON.stringify(opts)
//       }).then((response)=> {
        
//         response.json().then((data)=>{console.log(response)})
        
        
        
         
//     })  
 })