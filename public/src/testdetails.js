var table = document.getElementById("taskListBody");

var openListDiv = document.getElementById("openDetails");



var taskIDHeader = document.getElementById('taskID')

var openTicketForm = document.getElementById('openTicketForm')
var closedTicketForm = document.getElementById('closedTicketForm')
var ownerInput = document.getElementById('searchOwner')
var ownerInput2 = document.getElementById('searchOwner2')


openTicketForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.table(typeof ownerInput.value)
var ddw = {
    ticketOwner: ownerInput.value
}
    
    fetch('/tasks/owner',{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(ddw),
      }).then(response => response.json()).then(data => {
        console.log('Success:', data);
        openListDiv.innerHTML= ``
        data.forEach((element)=>{
            var list = document.createElement('ol')
            var listItem = document.createElement('li')
            listItem.setAttribute('class','card bg-dark text-warning')
            listItem.innerHTML = `OPEN TICKET FOR----${element.ticketOwner}----${element.details}--------`
            list.appendChild(listItem)
            openListDiv.appendChild(list) 
        })
      }).catch((error) => {
        console.error('Error:', error);
      })
})

closedTicketForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.table(typeof ownerInput.value)
var ddw = {
    ticketOwner: ownerInput2.value
}
    
    fetch('/tasks/owner',{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(ddw),
      }).then(response => response.json()).then(data => {
        console.log('Success:', data);
    openListDiv.innerHTML= ``
        data.forEach((element)=>{
            var list = document.createElement('ol')
            var listItem = document.createElement('li')
            listItem.setAttribute('class','card bg-dark text-primary')

            listItem.innerHTML = `CLOSED TICKET FOR----${element.ticketOwner}----${element.details}--------`
            list.appendChild(listItem)
            openListDiv.appendChild(list) 
        })
      }).catch((error) => {
        console.error('Error:', error);
      })
})



var createTaskForm = document.getElementById('createTaskForm')
var selectCategoryButton =document.getElementById('selectCategoryButton')
var completedInput = document.getElementById('completedInput')
var descriptionInput = document.getElementById('descriptionInput')
var detailsInput = document.getElementById('detailsInput')
var ticketOwnerInput = document.getElementById('ticketOwnerInput')
var updateTaskButton = document.getElementById('updateTaskButton')
var taskIDOutput = document.getElementById('taskIDOutput')



var completeButton = document.getElementById('completeButton')
var incompleteButton = document.getElementById('incompleteButton')
var createdButton = document.getElementById('createdButton')
var updatedButton = document.getElementById('updatedButton')
var allTicketsButton = document.getElementById('allTicketsButton')

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
                var deleteButton = document.createElement('button')
              

                deleteButton.innerText = 'DELETE TICKET'
                deleteButton.setAttribute('type', 'button')
                deleteButton.setAttribute('class', 'card bg-danger text-warning')
                deleteButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    fetch(`tasks/${element._id}`,{
                      method: 'DELETE', // or 'PUT'
                      headers: {
                        'Content-Type': 'application/json',
                        }
                   
                    }).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                      })
  alert('delete succesful.Refresh to confirm')       })
                  
                }) 

                var idButton = document.createElement('button')

                idButton.innerText = 'Get Task Details'
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
  
                    
                   var id = element._id
                   console.log(id)
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
  
                          openListDiv.innerHTML = `ID: ${data._id}OWNER: ${data.ticketOwner}DESCRIPTION: ${data.description}DETAILS: ${data.details}`
                        
  
  taskIDOutput.innerHTML =`${data._id}`
  descriptionInput.innerHTML = `${data.description}`
  detailsInput.innerHTML = `${data.details}`
  focusOnCreate.focus()
  
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
                var cell8 = row.insertCell(7)
                cell1.innerHTML = `${element.category}`;
                cell2.innerHTML = `${element.description}`
                cell3.innerHTML= `${element.completed}`
                cell4.innerHTML = `${element.createdAt}`
                cell5.innerHTML= `${element.updatedAt}`
                cell6.innerHTML= `${element.ticketOwner}`
                cell7.appendChild(idButton)
                cell8.appendChild(deleteButton)
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
            trueTasks.forEach((element)=> {
                var deleteButton = document.createElement('button')
              

              deleteButton.innerText = 'DELETE TICKET'
              deleteButton.setAttribute('type', 'button')
              deleteButton.setAttribute('class', 'card bg-danger text-warning')
              deleteButton.addEventListener('click', (e)=>{
                  e.preventDefault()
                  fetch(`tasks/${element._id}`,{
                    method: 'DELETE', // or 'PUT'
                    headers: {
                      'Content-Type': 'application/json',
                      }
                 
                  }).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data)
                    })
alert('delete succesful.Refresh to confirm')       })
                
              }) 
                var idButton = document.createElement('button')

                idButton.innerText = 'TICKET DETAILS'
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
  
                    
                   var id = element._id
                   console.log(id)
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
  
                          openListDiv.innerHTML = `ID: ${data._id}OWNER: ${data.ticketOwner}DESCRIPTION: ${data.description}DETAILS: ${data.details}`
  
                          taskIDOutput.innerHTML =`${data._id}`
                          descriptionInput.innerHTML = `${data.description}`
                          detailsInput.innerHTML = `${data.details}`
                          focusOnCreate.focus()
                          
  
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
                var cell8 = row.insertCell(7)
                cell1.innerHTML = `${element.category}`;
                cell2.innerHTML = `${element.description}`
                cell3.innerHTML= `${element.completed}`
                cell4.innerHTML = `${element.createdAt}`
                cell5.innerHTML= `${element.updatedAt}`
                cell6.innerHTML= `${element.ticketOwner}`
                cell7.appendChild(idButton)
                cell8.appendChild(deleteButton)
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
                var deleteButton = document.createElement('button')
              

                deleteButton.innerText = 'DELETE TICKET'
                deleteButton.setAttribute('type', 'button')
                deleteButton.setAttribute('class', 'card bg-danger text-warning')
                deleteButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    fetch(`tasks/${element._id}`,{
                      method: 'DELETE', // or 'PUT'
                      headers: {
                        'Content-Type': 'application/json',
                        }
                   
                    }).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                      })
  alert('delete succesful.Refresh to confirm')       })
                  
                }) 
                var idButton = document.createElement('button')

                idButton.innerText = 'TICKET DETAILS'
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
  
                          openListDiv.innerHTML = `ID: ${data._id}OWNER: ${data.ticketOwner}DESCRIPTION: ${data.description}DETAILS: ${data.details}`
                        
                         
                          taskIDOutput.innerHTML =`${data._id}`
                          descriptionInput.innerHTML = `${data.description}`
                          detailsInput.innerHTML = `${data.details}`
                          focusOnCreate.focus()
                          
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
                var cell8 = row.insertCell(7)
                cell1.innerHTML = `${element.category}`;
                cell2.innerHTML = `${element.description}`
                cell3.innerHTML= `${element.completed}`
                cell4.innerHTML = `${element.createdAt}`
                cell5.innerHTML= `${element.updatedAt}`
                cell6.innerHTML= `${element.ticketOwner}`
                cell7.appendChild(idButton)
                cell8.appendChild(deleteButton)
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
                var deleteButton = document.createElement('button')
              

                deleteButton.innerText = 'DELETE TICKET'
                deleteButton.setAttribute('type', 'button')
                deleteButton.setAttribute('class', 'card bg-danger text-warning')
                deleteButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    fetch(`tasks/${element._id}`,{
                      method: 'DELETE', // or 'PUT'
                      headers: {
                        'Content-Type': 'application/json',
                        }
                   
                    }).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                      })
  alert('delete succesful.Refresh to confirm')       })
                  
                }) 
                var idButton = document.createElement('button')

                idButton.innerText = 'TICKET DETAILS'
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          
                          
  
                        openListDiv.innerHTML = `ID: ${data._id}OWNER: ${data.ticketOwner}DESCRIPTION: ${data.description}DETAILS: ${data.details}`
                        
                        taskIDOutput.innerHTML =`${data._id}`
                        descriptionInput.innerHTML = `${data.description}`
                        detailsInput.innerHTML = `${data.details}`
                        focusOnCreate.focus()
                        
                          
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
                 var cell8 = row.insertCell(7)
                cell1.innerHTML = `${element.category}`;
                cell2.innerHTML = `${element.description}`
                cell3.innerHTML= `${element.completed}`
                cell4.innerHTML = `${element.createdAt}`
                cell5.innerHTML= `${element.updatedAt}`
                cell6.innerHTML= `${element.ticketOwner}`
                cell7.appendChild(idButton)
                cell8.appendChild(deleteButton)
                });
        })
    })
}

var getAllTasks = ()=>{
    fetch(`/tasks`).then((response)=> {
    
    
        response.json().then((data)=>{
           if(data.error) {
           return    console.log(data.error)
           }
       
          


          data.forEach((element)=> {
            var deleteButton = document.createElement('button')
              

            deleteButton.innerText = 'DELETE TICKET'
            deleteButton.setAttribute('type', 'button')
            deleteButton.setAttribute('class', 'card bg-danger text-warning')
            deleteButton.addEventListener('click', (e)=>{
                e.preventDefault()
                fetch(`tasks/${element._id}`,{
                  method: 'DELETE', // or 'PUT'
                  headers: {
                    'Content-Type': 'application/json',
                    }
               
                }).then((response)=>{
                  response.json().then((data)=>{
                      console.log(data)
                  })
alert('delete succesful.Refresh to confirm')       })
              
            }) 
              
              var idButton = document.createElement('button')

              idButton.innerText = 'TICKET DETAILS'
              idButton.setAttribute('type', 'button')
              
              idButton.setAttribute('class', 'card bg-success text-white')

              idButton.addEventListener('click', (e)=>{
                  e.preventDefault()

                  
                 var id = element._id
                 console.log(id)
                fetch(`/tasks/${id}`).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data)
                        
  
                        openListDiv.innerHTML = `ID: ${data._id}OWNER: ${data.ticketOwner}DESCRIPTION: ${data.description}DETAILS: ${data.details}`
                        
taskIDOutput.innerHTML =`${data._id}`
descriptionInput.innerHTML = `${data.description}`
detailsInput.innerHTML = `${data.details}`
focusOnCreate.focus()
  
                        
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
            var cell8 = row.insertCell(7)
            cell1.innerHTML = `${element.category}`;
            cell2.innerHTML = `${element.description}`
            cell3.innerHTML= `${element.completed}`
            cell4.innerHTML = `${element.createdAt}`
            cell5.innerHTML= `${element.updatedAt}`
            cell6.innerHTML= `${element.ticketOwner}`
            cell7.appendChild(idButton)
            cell8.appendChild(deleteButton)
                
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
console.log('kdagfkjsfkjsdhlfkjlkjfd')
getAllTasks()
})

createTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()
/*
router.patch('/tasks/:id')

['details','description', 'ownedBy' ,'completed', 'category']
*/

var taskUpdate = {
    category: selectCategoryButton.value,
    completed: completedInput.value,
    description: descriptionInput.value,
    ticketOwner: ticketOwnerInput.value,
    details: detailsInput.value
}
console.log(taskUpdate)


fetch(`/tasks/${taskIDOutput.innerHTML}`, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskUpdate),
  }).then((response)=>{
      response.json().then((data)=>{
console.log(data)
      })
  })
})

