/*
<span id="taskIDOutpout"></span>
  <span id="taskOwnerOutput"></span>
  <span id="taskDescriptionOutput"></span>
  <span id="taskDetailsOutput"></span>
*/
var taskIDOutput = document.getElementById('taskIDOutput')
var taskOwnerOutput = document.getElementById('taskOwnerOutput')
var taskDescriptionOutput = document.getElementById('taskDescriptionOutput')
var taskDetailsOutput = document.getElementById('taskDetailsOutput')


var testForm = document.getElementById('allTicketsForm')
// var messageOne = document.getElementById('testParagraph')
// var testDiv = document.getElementById('testDiv')
// var testList = document.getElementById('testList')

var table = document.getElementById("taskListBody");

var categoryButton = document.getElementById('categoryButton')
var completeButton = document.getElementById('completeButton')
var incompleteButton = document.getElementById('incompleteButton')
var createdButton = document.getElementById('createdButton')
var updatedButton = document.getElementById('updatedButton')

/*

setup sorting functions

by category
by completed(true)
by completed(false)
by created at
by updated at

*/


var getAllTasks = ()=>{
    fetch(`/tasks`).then((response)=> {
    
    
        response.json().then((data)=>{
           if(data.error) {
           return    console.log(data.error)
           }
       
          var idFunction = ()=>{
            var id = element._id
            console.log(id)
          }


          data.forEach((element)=> {
              
              var idButton = document.createElement('button')

              idButton.innerText = 'Get Task Details'
              idButton.setAttribute('type', 'button')

              idButton.addEventListener('click', (e)=>{
                  e.preventDefault()

                  
                 var id = element._id
                 console.log(id)
                fetch(`/tasks/${id}`).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data)
                        

/*
<span id="taskIDOutpout"></span>
  <span id="taskOwnerOutput"></span>
  <span id="taskDescriptionOutput"></span>
  <span id="taskDetailsOutput"></span>
*/

taskIDOutput.innerHTML =`                                ${id}`
taskOwnerOutput.innerHTML = `                            ${data.ticketOwner}`
taskDescriptionOutput.innerHTML = `                      ${data.description}`
taskDetailsOutput.innerHTML = `                          ${data.details}`
taskIDOutput.focus()

                    })
                })
                })

            table.classList.add('table','table-striped')
            var row = table.insertRow(0);
            row.classList.add('card-body')
            var cell1 = row.insertCell(0);
            cell1.classList.add('card')
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2)
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4)
            var cell6 = row.insertCell(5)
            var cell7 = row.insertCell(6)
            cell1.innerHTML = `${element.category}`;
            cell2.innerHTML = `${element.description}`
            cell3.innerHTML= `${element.completed}`
            cell4.innerHTML = `${element.createdAt}`
            cell5.innerHTML= `${element.updatedAt}`
            cell6.innerHTML= `${element.ticketOwner}`
            cell7.appendChild(idButton)
                
          });
          
    })
    })
    
}


testForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    getAllTasks()

})




// buttons
var byCategory = ()=>{
    /*
    categories
    Urgent</option>
  Semi-Urgent</option>
  Short-Term Goal</option>
 Long-Term Goal</option>

 use filter to filter for different category string values
    */
   fetch('/tasks').then((response)=>{
    response.json().then((data)=>{
     if(data.error){
            alert(data.error)
        }

        
       
        var trueTasks = ''


        
table.innerHTML= ``
          console.log(trueTasks)
          
          taskFilter.forEach((e)=> {
            table.classList.add('table','table-striped')
            var row = table.insertRow(0);
            row.classList.add('card-body')
            var cell1 = row.insertCell(0);
            cell1.classList.add('card')
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2)
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4)
            var cell6 = row.insertCell(5)
            cell1.innerHTML = `${e.category}`;
            cell2.innerHTML = `${e.description}`
            cell3.innerHTML= `${e.completed}`
            cell4.innerHTML = `${e.createdAt}`
            cell5.innerHTML= `${e.updatedAt}`
            cell6.innerHTML= `${e.ticketOwner}`
          });
    })
})
}
var byCreatedAt = () =>{
    fetch('/tasks').then((response)=>{
        response.json().then((data)=>{
         if(data.error){
                alert(data.error)
            }
            const tasks = data.sort((a, b) => a.createdAt - b.createdAt)
            console.log(tasks)
            var trueTasks = []
            tasks.forEach((e)=>{
               trueTasks.push(e)
            })

           
            table.innerHTML= ``
            console.log(trueTasks)
            trueTasks.forEach((e)=> {
                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-body')
                var cell1 = row.insertCell(0);
                cell1.classList.add('card')
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4)
                var cell6 = row.insertCell(5)
                cell1.innerHTML = `${e.category}`;
                cell2.innerHTML = `${e.description}`
                cell3.innerHTML= `${e.completed}`
                cell4.innerHTML = `${e.createdAt}`
                cell5.innerHTML= `${e.updatedAt}`
                cell6.innerHTML= `${e.ticketOwner}`
           });



        })
    })
}



var byUpdatedAt = () =>{
    fetch('/tasks').then((response)=>{
        response.json().then((data)=>{
         if(data.error){
                alert(data.error)
            }

            const tasks = data.sort((a, b) => a.createdAt - b.createdAt)
            console.log(tasks)
            var trueTasks = []
            tasks.forEach((e)=>{
               trueTasks.push(e)
            })

           
            table.innerHTML= ``
            console.log(trueTasks)
            trueTasks.forEach((e)=> {
                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-body')
                var cell1 = row.insertCell(0);
                cell1.classList.add('card')
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4)
                var cell6 = row.insertCell(5)
                cell1.innerHTML = `${e.category}`;
                cell2.innerHTML = `${e.description}`
                cell3.innerHTML= `${e.completed}`
                cell4.innerHTML = `${e.createdAt}`
                cell5.innerHTML= `${e.updatedAt}`
                cell6.innerHTML= `${e.ticketOwner}`
           });
        })
    })
}



var completeTasksOnly = () =>{
    fetch('/tasks').then((response)=>{
        response.json().then((data)=>{
         if(data.error){
                alert(data.error)
            }

            var trueTasks =[]
            data.forEach((e)=>{
                if(e.completed === true){
                    trueTasks.push(e)
                }
            })
   table.innerHTML= ``
              console.log(trueTasks)
              trueTasks.forEach((e)=> {
                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-body')
                var cell1 = row.insertCell(0);
                cell1.classList.add('card')
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4)
                var cell6 = row.insertCell(5)
                cell1.innerHTML = `${e.category}`;
                cell2.innerHTML = `${e.description}`
                cell3.innerHTML= `${e.completed}`
                cell4.innerHTML = `${e.createdAt}`
                cell5.innerHTML= `${e.updatedAt}`
                cell6.innerHTML= `${e.ticketOwner}`
             });
        })
    })
}

var incompleteTasksOnly = () =>{
    fetch('/tasks').then((response)=>{
        response.json().then((data)=>{
         if(data.error){
                alert(data.error)
            }

            var trueTasks =[]
            data.forEach((e)=>{
                if(e.completed === false){
                    trueTasks.push(e)
                }
            })
            console.log(trueTasks)
   table.innerHTML= ``
              console.log(trueTasks)
              trueTasks.forEach((e)=> {
               
               table.classList.add('table','table-striped')
               var row = table.insertRow(0);
               row.classList.add('card-body')
               var cell1 = row.insertCell(0);
               cell1.classList.add('card')
               var cell2 = row.insertCell(1);
               var cell3 = row.insertCell(2)
               var cell4 = row.insertCell(3);
               var cell5 = row.insertCell(4)
               var cell6 = row.insertCell(5)
               cell1.innerHTML = `${e.category}`;
               cell2.innerHTML = `${e.description}`
               cell3.innerHTML= `${e.completed}`
               cell4.innerHTML = `${e.createdAt}`
               cell5.innerHTML= `${e.updatedAt}`
               cell6.innerHTML= `${e.ticketOwner}`
             });
        })
    })
}




categoryButton.addEventListener('change', (e) => {
    e.preventDefault()
    console.log(e.target.value)


  

            fetch('/tasks').then((response)=>{
                response.json().then((data)=>{
                 if(data.error){
                        alert(data.error)
                    }
        
                    var trueTasks =[]
                    data.forEach((element)=>{
                        if(element.category === e.target.value){
                            trueTasks.push(element)
                        }
                    })
                    console.log(trueTasks)
           table.innerHTML= ``
                      console.log(trueTasks)
                      trueTasks.forEach((el)=> {
                       
                       table.classList.add('table','table-striped')
                       var row = table.insertRow(0);
                       row.classList.add('card-body')
                       var cell1 = row.insertCell(0);
                       cell1.classList.add('card')
                       var cell2 = row.insertCell(1);
                       var cell3 = row.insertCell(2)
                       var cell4 = row.insertCell(3);
                       var cell5 = row.insertCell(4)
                       cell1.innerHTML = `${el.category}`;
                       cell2.innerHTML = `${el.description}`
                       cell3.innerHTML= `${el.completed}`
                       cell4.innerHTML = `${el.createdAt}`
                       cell5.innerHTML= `${el.updatedAt}`
                     });
                })
            })
    
})

completeButton.addEventListener('submit', (e)=>{
    e.preventDefault()
    completeTasksOnly()
})
incompleteButton.addEventListener('submit', (e)=>{
    e.preventDefault()
    incompleteTasksOnly()
})

createdButton.addEventListener('submit', (e)=>{
    e.preventDefault()
    byCreatedAt()
})

updatedButton.addEventListener('submit', (e)=>{
    e.preventDefault()
    byUpdatedAt()
})


var createTaskForm = document.getElementById('createTaskForm')
var selectCategoryButton =document.getElementById('selectCategoryButton')
var ticketOwner = document.getElementById('ticketOwnerInput')
var completedInput = document.getElementById('completedInput')
var descriptionInput = document.getElementById('descriptionInput')
var detailsInput = document.getElementById('detailsInput')
var createTaskButton = document.getElementById('createTaskButton')
createTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    var ddw = {
ticketOwner: ticketOwner.value,
category: selectCategoryButton.value,
description: descriptionInput.value,
completed: completedInput.value,
details: detailsInput.value
    }
    
    
    fetch(`/tasks`,{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(ddw),
      }).then(response => response.json()).then(data => {
        console.log('Success:', data);
      }).catch((error) => {
        console.error('Error:', error);
      })
 })
getAllTasks()



/*
update task (testing)
1. find task by parameters
1 1/2. isolate task object
2. create function that takes in task object isolates taskid from task object
3. use task id to find by id and update


var ddw = {
ticketOwner: ticketOwner.value,
category: selectCategoryButton.value,
description: descriptionInput.value,
completed: completedInput.value,
details: detailsInput.value
    }
    
    
    fetch(`/tasks`,{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `https://localhost:3000/tasaksS`,
'Vary': 'Origin'
        },
        body: JSON.stringify(ddw),
      }).then(response => response.json()).then(data => {
        console.log('Success:', data._id);
      }).catch((error) => {
        console.error('Error:', error);
      })



const generateTodoDOM = (todo) => {
    
    const todoEl = document.createElement('label')  
    const containerEl = document.createElement('div')
    const checkbox =document.createElement('input') 
    const todoText = document.createElement('p')
    const removeButton = document.createElement('button')
   

    //checkbox if data shows todo is completed
    
// setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('click', (e) =>{
    
toggleTodo(id)

renderTodos()
})


*/