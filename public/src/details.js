var table = document.getElementById("taskListBody");

var taskIDHeader = document.getElementById('taskID')

var createTaskForm = document.getElementById('createTaskForm')

var completedInput = document.getElementById('completedInput')
var detailsInput = document.getElementById('detailsInput')
var titleInput = document.getElementById('titleInput')
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
                      window.location.assign('/details.html') 
                         })
                  
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
                        
                                        
                        taskIDOutput.innerHTML =`${data._id}`
                        detailsInput.innerHTML = `${data.details}`
                        titleInput.innerHTML = `${data.title}`
                        detailsInput.focus()
                      })
                  })
                  })
                  table.innerHTML = ``
                  table.classList.add('table','table-striped')
                  var row = table.insertRow(0);
                  row.classList.add('card-header')
      
                  var cell1 = row.insertCell(0);
                  cell1.setAttribute('class', 'card-body bg-secondary')
                  var cell2 = row.insertCell(1)
                  cell2.setAttribute('class', 'card-body ')
                  var cell3 = row.insertCell(2)
                  cell3.setAttribute('class', 'card-body bg-secondary')
                  
                  cell1.innerHTML= `${element.title}`
                  cell2.appendChild(idButton)
                  cell3.appendChild(deleteButton)    
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

                    window.location.assign('/details.html') 
                })
                
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
                        
                                        
                        taskIDOutput.innerHTML =`${data._id}`
                        detailsInput.innerHTML = `${data.details}`
                        titleInput.innerHTML = `${data.title}`
                        detailsInput.focus()
                          
  
                      })
                  })
                  })
                  table.innerHTML = ``
                  table.classList.add('table','table-striped')
                  var row = table.insertRow(0);
                  row.classList.add('card-header')
      
                  var cell1 = row.insertCell(0);
                  cell1.setAttribute('class', 'card-body bg-secondary')
                  var cell2 = row.insertCell(1)
                  cell2.setAttribute('class', 'card-body ')
                  var cell3 = row.insertCell(2)
                  cell3.setAttribute('class', 'card-body bg-secondary')
                  
                  cell1.innerHTML= `${element.title}`
                  cell2.appendChild(idButton)
                  cell3.appendChild(deleteButton)    
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
                      window.location.assign('/details.html') 
                    })
                  
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
                        
                                        
                        taskIDOutput.innerHTML =`${data._id}`
                        detailsInput.innerHTML = `${data.details}`
                        titleInput.innerHTML = `${data.title}`
                        detailsInput.focus()
                          
                      })
                  })
                  })
                  table.innerHTML = ``
                  table.classList.add('table','table-striped')
                  var row = table.insertRow(0);
                  row.classList.add('card-header')
      
                  var cell1 = row.insertCell(0);
                  cell1.setAttribute('class', 'card-body bg-secondary')
                  var cell2 = row.insertCell(1)
                  cell2.setAttribute('class', 'card-body ')
                  var cell3 = row.insertCell(2)
                  cell3.setAttribute('class', 'card-body bg-secondary')
                  
                  cell1.innerHTML= `${element.title}`
                  cell2.appendChild(idButton)
                  cell3.appendChild(deleteButton)    
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
                      window.location.assign('/details.html') 
                    })
                  
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
                    
                                        
                        taskIDOutput.innerHTML =`${data._id}`
                        detailsInput.innerHTML = `${data.details}`
                        titleInput.innerHTML = `${data.title}`
                        detailsInput.focus()
                          
                      })
                  })
                  })
                  table.innerHTML = ``
                  table.classList.add('table','table-striped')
                  var row = table.insertRow(0);
                  row.classList.add('card-header')
      
                  var cell1 = row.insertCell(0);
                  cell1.setAttribute('class', 'card-body bg-secondary')
                  var cell2 = row.insertCell(1)
                  cell2.setAttribute('class', 'card-body ')
                  var cell3 = row.insertCell(2)
                  cell3.setAttribute('class', 'card-body bg-secondary')
                  
                  cell1.innerHTML= `${element.title}`
                  cell2.appendChild(idButton)
                  cell3.appendChild(deleteButton)    
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
              

            deleteButton.innerText = 'DELETE'
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
                  window.location.assign('/details.html') 
                })
              
            }) 
              
              var idButton = document.createElement('button')

              idButton.innerText = 'Update'
              idButton.setAttribute('type', 'button')
              
              idButton.setAttribute('class', 'card bg-success text-white')

              idButton.addEventListener('click', (e)=>{
                  e.preventDefault()

                  
                 var id = element._id
                 console.log(id)
                fetch(`/tasks/${id}`).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data)
                        
                                        
                        taskIDOutput.innerHTML =`${data._id}`
                        detailsInput.innerHTML = `${data.details}`
                        titleInput.innerHTML = `${data.title}`
                        detailsInput.focus()
  
                        
                    })
                })
                })
table.innerHTML = ``
            table.classList.add('table','table-striped')
            var row = table.insertRow(0);
            row.classList.add('card-header')

            var cell1 = row.insertCell(0);
            cell1.setAttribute('class', 'card-body bg-secondary')
            var cell2 = row.insertCell(1)
            cell2.setAttribute('class', 'card-body ')
            var cell3 = row.insertCell(2)
            cell3.setAttribute('class', 'card-body bg-secondary')
            
            cell1.innerHTML= `${element.title}`
            cell2.appendChild(idButton)
            cell3.appendChild(deleteButton)    
      
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
var id = taskIDOutput.innerHTML
console.log(id)
var taskUpdate = {
    
    completed: completedInput.value,
    details: detailsInput.value,
    
    title: titleInput.value
}
console.log(taskUpdate)


fetch(`/tasks/${id}`, {
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

