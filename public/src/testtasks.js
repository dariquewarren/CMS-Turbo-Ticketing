var taskIDInput = document.getElementById('taskIDInput')
var selectCategoryButton =document.getElementById('selectCategoryButton')
var ticketOwnerInput = document.getElementById('ticketOwnerInput')
var completedInput = document.getElementById('completedInput')
var descriptionInput = document.getElementById('descriptionInput')
var detailsInput = document.getElementById('detailsInput')
var createTaskForm = document.getElementById('createTask')
// var messageOne = document.getElementById('testParagraph')
// var testDiv = document.getElementById('testDiv')
// var testList = document.getElementById('testList')

var table = document.getElementById("taskListBody");

var categoryButton = document.getElementById('selectCategoryButton')
var completeButton = document.getElementById('completeButton')
var incompleteButton = document.getElementById('incompleteButton')
var createdButton = document.getElementById('createdButton')
var updatedButton = document.getElementById('updatedButton')
var allTicketsButton = document.getElementById('allTicketsButton')


// buttons
var getAllTasks = ()=>{
    fetch(`/tasks`).then((response)=> {
    
    
        response.json().then((data)=>{
           if(data.error) {
           return    console.log(data.error)
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
                        

                        taskIDInput.innerHTML =`${data._id}`
                        ticketOwnerInput.textContent = `${data.ticketOwner}`
                        completedInput.innerHTML = `${data.completed}`
                        descriptionInput.innerHTML = `${data.description}`
                        detailsInput.innerHTML = `${data.details}`
                        selectCategoryButton.focus()
  
//   taskIDOutput.innerHTML =`${data._id}`
//   taskOwnerOutput.innerHTML = `${data.ticketOwner}`
//   taskDescriptionOutput.innerHTML = `${data.description}`
//   taskDetailsOutput.innerHTML = `${data.details}`
//   taskIDOutput.focus()

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
            trueTasks.forEach((element)=> {
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
                          
                          taskIDInput.innerHTML =`${data._id}`
                        ticketOwnerInput.textContent = `${data.ticketOwner}`
                        completedInput.innerHTML = `${data.completed}`
                        descriptionInput.innerHTML = `${data.description}`
                        detailsInput.innerHTML = `${data.details}`
                        selectCategoryButton.focus()
  
//   taskIDOutput.innerHTML =`${data._id}`
//   taskOwnerOutput.innerHTML = `${data.ticketOwner}`
//   taskDescriptionOutput.innerHTML = `${data.description}`
//   taskDetailsOutput.innerHTML = `${data.details}`
//   taskIDOutput.focus()
  
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



var byUpdatedAt = () =>{
    fetch('/tasks').then((response)=>{
        response.json().then((data)=>{
         if(data.error){
                alert(data.error)
            }

            const tasks = data.sort((a, b) => a.updatedAt - b.updatedAt)
            console.log(tasks)
            var trueTasks = []
            tasks.forEach((e)=>{
               trueTasks.push(e)
               console.log(e)
            })

           
            table.innerHTML= ``
            console.log(trueTasks)
            trueTasks.forEach((element)=> {

                var idButton = document.createElement('button')

                idButton.innerText = 'Get Task Details'
                idButton.setAttribute('type', 'button')
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
  
                          taskIDInput.innerHTML =`${data._id}`
                        ticketOwnerInput.textContent = `${data.ticketOwner}`
                        completedInput.innerHTML = `${data.completed}`
                        descriptionInput.innerHTML = `${data.description}`
                        detailsInput.innerHTML = `${data.details}`
                        selectCategoryButton.focus()
  
//   taskIDOutput.innerHTML =`${data._id}`
//   taskOwnerOutput.innerHTML = `${data.ticketOwner}`
//   taskDescriptionOutput.innerHTML = `${data.description}`
//   taskDetailsOutput.innerHTML = `${data.details}`
//   taskIDOutput.focus()
  
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
              trueTasks.forEach((element)=> {
                  
                var idButton = document.createElement('button')

                idButton.innerText = 'Get Task Details'
                idButton.setAttribute('type', 'button')
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
  
                          taskIDInput.innerHTML =`${data._id}`
                          ticketOwnerInput.textContent = `${data.ticketOwner}`
                          completedInput.innerHTML = `${data.completed}`
                          descriptionInput.innerHTML = `${data.description}`
                          detailsInput.innerHTML = `${data.details}`
                          selectCategoryButton.focus()
    
  //   taskIDOutput.innerHTML =`${data._id}`
  //   taskOwnerOutput.innerHTML = `${data.ticketOwner}`
  //   taskDescriptionOutput.innerHTML = `${data.description}`
  //   taskDetailsOutput.innerHTML = `${data.details}`
  //   taskIDOutput.focus()
  
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
              trueTasks.forEach((element)=> {
               
                var idButton = document.createElement('button')

                idButton.innerText = 'Get Task Details'
                idButton.setAttribute('type', 'button')
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
  
                          taskIDInput.innerHTML =`${data._id}`
                          ticketOwnerInput.textContent = `${data.ticketOwner}`
                          completedInput.innerHTML = `${data.completed}`
                          descriptionInput.innerHTML = `${data.description}`
                          detailsInput.innerHTML = `${data.details}`
                          selectCategoryButton.focus()
    
  //   taskIDOutput.innerHTML =`${data._id}`
  //   taskOwnerOutput.innerHTML = `${data.ticketOwner}`
  //   taskDescriptionOutput.innerHTML = `${data.description}`
  //   taskDetailsOutput.innerHTML = `${data.details}`
  //   taskIDOutput.focus()
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

allTicketsButton.addEventListener('submit', (e)=>{
    e.preventDefault()
console.log('lolololo')
getAllTasks()
})

createTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    var ddw = {
owner: ticketOwnerInput.value,
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

var deleteForm = document.getElementById('deleteForm')


var deleteTask = ()=>{
    var ddw = {
        id : taskIDInput.value
    }
  
    fetch(`tasks/${ddw.id}`,{
        method: 'delete'}).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            return data
        })
    })
}

deleteForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    deleteTask()
})