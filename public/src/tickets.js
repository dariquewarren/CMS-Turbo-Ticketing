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
var focusOnCreate = document.getElementById('focusOnCreate')

var openListDiv = document.getElementById("openDetails");




// buttons
var everyTask = ()=>{
    fetch(`/tasks`).then((response)=> {
    
    
        response.json().then((data)=>{
           if(data.error) {
           return    console.log(data.error)
           }
       
          table.innerHTML = ''


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
                    window.location.assign('/posts.html')
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
                        
                        openListDiv.innerHTML = `ID: ${data._id} <br>CREATED BY: ${data.ticketOwner} <br> TITLE: ${data.details}<br> DESCRIPTION: ${data.description}`
                        
                        focusOnCreate.focus()

                    })
                })
                })

            table.classList.add('table','table-striped')
            var row = table.insertRow(0);
            row.classList.add('card-header')

            var cell1 = row.insertCell(0);
            cell1.setAttribute('class', 'card-body')
            var cell2 = row.insertCell(1)
            cell2.setAttribute('class', 'card-body')
            var cell3 = row.insertCell(2)
            cell3.setAttribute('class', 'card-body')
            var cell4 = row.insertCell(3);
            cell4.setAttribute('class', 'card-body')
            var cell5 = row.insertCell(4)
            cell5.setAttribute('class', 'card-body')
            var cell6 = row.insertCell(5)
            cell6.setAttribute('class', 'card-body')
            cell1.innerHTML= `${element.ticketOwner}`
            cell2.innerHTML = `${element.category}`;
            cell3.innerHTML = `${element.details}`
            cell4.innerHTML= `${element.completed}`
            cell5.appendChild(idButton)
            cell6.appendChild(deleteButton)
                
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
       
          table.innerHTML = ''


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
                    window.location.assign('/posts.html')
                      })
                
              })

              var idButton = document.createElement('button')
              idButton.innerText = 'Ticket Details'
              idButton.setAttribute('type', 'button')
              idButton.setAttribute('class', 'card bg-success text-white')

              idButton.addEventListener('click', (e)=>{
                  e.preventDefault()
                  
                  
                 var id = element._id
                 console.log(id)
                fetch(`/tasks/${id}`).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data)
                        
                        openListDiv.innerHTML = `ID: ${data._id} <br>CREATED BY: ${data.ticketOwner} <br> TITLE: ${data.details}<br> DESCRIPTION: ${data.description}`
                        
                        focusOnCreate.focus()

                    })
                })
                })

            table.classList.add('table','table-striped')
            var row = table.insertRow(0);
            row.classList.add('card-header')

            var cell1 = row.insertCell(0);
            cell1.setAttribute('class', 'card-body')
            var cell2 = row.insertCell(1)
            cell2.setAttribute('class', 'card-body')
            var cell3 = row.insertCell(2)
            cell3.setAttribute('class', 'card-body')
            var cell4 = row.insertCell(3);
            cell4.setAttribute('class', 'card-body')
            var cell5 = row.insertCell(4)
            cell5.setAttribute('class', 'card-body')
            var cell6 = row.insertCell(5)
            cell6.setAttribute('class', 'card-body')
            cell1.innerHTML= `${element.ticketOwner}`
            cell2.innerHTML = `${element.category}`;
            cell3.innerHTML = `${element.details}`
            cell4.innerHTML= `${element.completed}`
            cell5.appendChild(idButton)
            cell6.appendChild(deleteButton)
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
                    window.location.assign('/posts.html')
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
                        
                        openListDiv.innerHTML = `ID: ${data._id} <br>CREATED BY: ${data.ticketOwner} <br> TITLE: ${data.details}<br> DESCRIPTION: ${data.description}`
                        
                        focusOnCreate.focus()
                      })
                  })
                  })

                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body')
                var cell4 = row.insertCell(3);
                cell4.setAttribute('class', 'card-body')
                var cell5 = row.insertCell(4)
                cell5.setAttribute('class', 'card-body')
                var cell6 = row.insertCell(5)
                cell6.setAttribute('class', 'card-body')
                cell1.innerHTML= `${element.ticketOwner}`
                cell2.innerHTML = `${element.category}`;
                cell3.innerHTML = `${element.details}`
                cell4.innerHTML= `${element.completed}`
                cell5.appendChild(idButton)
                cell6.appendChild(deleteButton)
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
                      window.location.assign('/posts.html')
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
                        
                        openListDiv.innerHTML = `ID: ${data._id} <br>CREATED BY: ${data.ticketOwner} <br> TITLE: ${data.details}<br> DESCRIPTION: ${data.description}`
                        
                        focusOnCreate.focus()
                                    })
                  })
                  })
  

                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body')
                var cell4 = row.insertCell(3);
                cell4.setAttribute('class', 'card-body')
                var cell5 = row.insertCell(4)
                cell5.setAttribute('class', 'card-body')
                var cell6 = row.insertCell(5)
                cell6.setAttribute('class', 'card-body')
                cell1.innerHTML= `${element.ticketOwner}`
                cell2.innerHTML = `${element.category}`;
                cell3.innerHTML = `${element.details}`
                cell4.innerHTML= `${element.completed}`
                cell5.appendChild(idButton)
                cell6.appendChild(deleteButton)
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
                    window.location.assign('/posts.html')
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
                        
                        openListDiv.innerHTML = `ID: ${data._id} <br>CREATED BY: ${data.ticketOwner} <br> TITLE: ${data.details}<br> DESCRIPTION: ${data.description}`
                        
                        focusOnCreate.focus()
                      })
                  })
                  })

                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body')
                var cell4 = row.insertCell(3);
                cell4.setAttribute('class', 'card-body')
                var cell5 = row.insertCell(4)
                cell5.setAttribute('class', 'card-body')
                var cell6 = row.insertCell(5)
                cell6.setAttribute('class', 'card-body')
                cell1.innerHTML= `${element.ticketOwner}`
                cell2.innerHTML = `${element.category}`;
                cell3.innerHTML = `${element.details}`
                cell4.innerHTML= `${element.completed}`
                cell5.appendChild(idButton)
                cell6.appendChild(deleteButton)
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
                      window.location.assign('/posts.html')
                          })
                  
                })

                idButton.innerText = 'TICKET DETAILS'
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                        console.log(data)
                        
                        openListDiv.innerHTML = `ID: ${data._id} <br>CREATED BY: ${data.ticketOwner} <br> TITLE: ${data.details}<br> DESCRIPTION: ${data.description}`
                        
                        focusOnCreate.focus()

                      })
                  })
                  })
                  var row = table.insertRow(0);
                  row.classList.add('card-header')
      
                  var cell1 = row.insertCell(0);
                  cell1.setAttribute('class', 'card-body')
                  var cell2 = row.insertCell(1)
                  cell2.setAttribute('class', 'card-body')
                  var cell3 = row.insertCell(2)
                  cell3.setAttribute('class', 'card-body')
                  var cell4 = row.insertCell(3);
                  cell4.setAttribute('class', 'card-body')
                  var cell5 = row.insertCell(4)
                  cell5.setAttribute('class', 'card-body')
                  var cell6 = row.insertCell(5)
                  cell6.setAttribute('class', 'card-body')
                  cell1.innerHTML= `${element.ticketOwner}`
                  cell2.innerHTML = `${element.category}`;
                  cell3.innerHTML = `${element.details}`
                  cell4.innerHTML= `${element.completed}`
                  cell5.appendChild(idButton)
                  cell6.appendChild(deleteButton)
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
ticketOwner: ticketOwnerInput.value,
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
    console.log(document.cookie) 
       console.log('Success:', data);
      }).catch((error) => {
        console.error('Error:', error);
      })
      
 })


//   delete button
