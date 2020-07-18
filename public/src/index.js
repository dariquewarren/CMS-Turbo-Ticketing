var taskIDDiv = document.getElementById('taskIDDiv')
var titleDiv = document.getElementById('titleDiv')
var detailsDiv = document.getElementById('detailsDiv')

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
              deleteButton.setAttribute('class','card bg-danger text-warning')
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
                    window.location.assign('/index.html')
                 })
              })

              var idButton = document.createElement('button')
              idButton.innerText = 'TICKET DETAILS'
              idButton.setAttribute('type', 'button')
              idButton.setAttribute('class', 'card bg-success text-white')
              
              idButton.setAttribute('data-toggle', "tooltip")
              
              idButton.setAttribute('data-html', 'true')
              
              idButton.setAttribute('title', `display task above`)
              idButton.addEventListener('click', (e)=>{
                  e.preventDefault()

                  
                 var id = element._id
                 console.log(id)
                fetch(`/tasks/${id}`).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data)
                        

                        taskIDDiv.innerHTML =`TICKET ID: ${data._id}`
                        titleDiv.textContent = `TITLE: ${data.title}`
                        detailsDiv.innerHTML = `TICKET DETAILS: ${data.details}`
                        
  
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
            var row = table.insertRow(0);
            row.classList.add('card-header')

            var cell1 = row.insertCell(0);
            cell1.setAttribute('class', 'card-body bg-secondary')
            var cell2 = row.insertCell(1)
            cell2.setAttribute('class', 'card-body ')
            var cell3 = row.insertCell(2)
            cell3.setAttribute('class', 'card-body bg-secondary')
            var cell4 = row.insertCell(3);
            cell4.setAttribute('class', 'card-body')
            var cell5 = row.insertCell(4)
            cell5.setAttribute('class', 'card-body bg-secondary')
       
            cell1.innerHTML= `${element.title}`
            cell2.innerHTML = `${element.details}`;
            cell3.innerHTML = `${element.completed}`
            cell4.appendChild(idButton)
            cell5.appendChild(deleteButton)      });
          
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
                    window.location.assign('/index.html')
                      })
                
              })

              var idButton = document.createElement('button')
              idButton.innerText = 'TICKET DETAILS'
              idButton.setAttribute('type', 'button')
              idButton.setAttribute('class', 'card bg-success text-white')
              
              idButton.setAttribute('data-toggle', "tooltip")
              
              idButton.setAttribute('data-html', 'true')
              
              idButton.setAttribute('title', `display task above`)
/* <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button> */
              idButton.addEventListener('click', (e)=>{
                  e.preventDefault()

                  
                 var id = element._id
                 console.log(id)
                fetch(`/tasks/${id}`).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data)
                        
                        taskIDDiv.innerHTML =`TICKET ID: ${data._id}`
                        titleDiv.textContent = `TITLE: ${data.title}`
                        detailsDiv.innerHTML = `TICKET DETAILS: ${data.details}`
                       
  
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
            var row = table.insertRow(0);
            row.classList.add('card-header')

            var cell1 = row.insertCell(0);
            cell1.setAttribute('class', 'card-body bg-secondary')
            var cell2 = row.insertCell(1)
            cell2.setAttribute('class', 'card-body ')
            var cell3 = row.insertCell(2)
            cell3.setAttribute('class', 'card-body bg-secondary')
            var cell4 = row.insertCell(3);
            cell4.setAttribute('class', 'card-body')
            var cell5 = row.insertCell(4)
            cell5.setAttribute('class', 'card-body bg-secondary')
       
            cell1.innerHTML= `${element.title}`
            cell2.innerHTML = `${element.details}`;
            cell3.innerHTML = `${element.completed}`
            cell4.appendChild(idButton)
            cell5.appendChild(deleteButton)    
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
            const tasks = data.sort((a, b) => b.createdAt - a.createdAt)
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
                    window.location.assign('/index.html')   
                 })
                
              })
                
              var idButton = document.createElement('button')
              idButton.innerText = 'TICKET DETAILS'
              idButton.setAttribute('type', 'button')
              idButton.setAttribute('class', 'card bg-success text-white')
              
              idButton.setAttribute('data-toggle', "tooltip")
              
              idButton.setAttribute('data-html', 'true')
              
              idButton.setAttribute('title', `display task above`)
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
  
                    
                   var id = element._id
                   console.log(id)
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          taskIDDiv.innerHTML =`TICKET ID: ${data._id}`
                          titleDiv.textContent = `TITLE: ${data.title}`
                          detailsDiv.innerHTML = `TICKET DETAILS: ${data.details}`
//   taskOwnerOutput.innerHTML = `${data.ticketOwner}`
//   taskDescriptionOutput.innerHTML = `${data.description}`
//   taskDetailsOutput.innerHTML = `${data.details}`
//   taskIDOutput.focus()
  
                      })
                  })
                  })

                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body bg-secondary')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body ')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body bg-secondary')
                var cell4 = row.insertCell(3);
                cell4.setAttribute('class', 'card-body')
                var cell5 = row.insertCell(4)
                cell5.setAttribute('class', 'card-body bg-secondary')
           
                cell1.innerHTML= `${element.title}`
                cell2.innerHTML = `${element.details}`;
                cell3.innerHTML = `${element.completed}`
                cell4.appendChild(idButton)
                cell5.appendChild(deleteButton)     });



        })
    })
}



var byUpdatedAt = () =>{
    fetch('/tasks').then((response)=>{
        response.json().then((data)=>{
         if(data.error){
                alert(data.error)
            }

            const tasks = data.sort((a, b) => b.updatedAt - a.updatedAt)
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
                      window.location.assign('/index.html')
                    })
                  
                })
                var idButton = document.createElement('button')
                idButton.innerText = 'TICKET DETAILS'
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
                
                idButton.setAttribute('data-toggle', "tooltip")
                
                idButton.setAttribute('data-html', 'true')
                
                idButton.setAttribute('title', `display task above`)
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
                          taskIDDiv.innerHTML =`TICKET ID: ${data._id}`
                          titleDiv.textContent = `TITLE: ${data.title}`
                          detailsDiv.innerHTML = `TICKET DETAILS: ${data.details}`
                           
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
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body bg-secondary')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body ')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body bg-secondary')
                var cell4 = row.insertCell(3);
                cell4.setAttribute('class', 'card-body')
                var cell5 = row.insertCell(4)
                cell5.setAttribute('class', 'card-body bg-secondary')
           
                cell1.innerHTML= `${element.title}`
                cell2.innerHTML = `${element.details}`;
                cell3.innerHTML = `${element.completed}`
                cell4.appendChild(idButton)
                cell5.appendChild(deleteButton)      });
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
                    window.location.assign('/index.html')
                })
                
              })  
              var idButton = document.createElement('button')
              idButton.innerText = 'TICKET DETAILS'
              idButton.setAttribute('type', 'button')
              idButton.setAttribute('class', 'card bg-success text-white')
              
              idButton.setAttribute('data-toggle', "tooltip")
              
              idButton.setAttribute('data-html', 'true')
              
              idButton.setAttribute('title', `display task above`)
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
                          taskIDDiv.innerHTML =`TICKET ID: ${data._id}`
                          titleDiv.textContent = `TITLE: ${data.title}`
                          detailsDiv.innerHTML = `TICKET DETAILS: ${data.details}`
                         
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
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body bg-secondary')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body ')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body bg-secondary')
                var cell4 = row.insertCell(3);
                cell4.setAttribute('class', 'card-body')
                var cell5 = row.insertCell(4)
                cell5.setAttribute('class', 'card-body bg-secondary')
           
                cell1.innerHTML= `${element.title}`
                cell2.innerHTML = `${element.details}`;
                cell3.innerHTML = `${element.completed}`
                cell4.appendChild(idButton)
                cell5.appendChild(deleteButton)    
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
                      window.location.assign('/index.html')     })
                  
                })

  
                var idButton = document.createElement('button')
                idButton.innerText = 'TICKET DETAILS'
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
                
                idButton.setAttribute('data-toggle', "tooltip")
                
                idButton.setAttribute('data-html', 'true')
                
                idButton.setAttribute('title', `display task above`)
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    var id = element._id
                  fetch(`/tasks/${id}`).then((response)=>{
                      response.json().then((data)=>{
                          console.log(data)
                          
  
                          taskIDDiv.innerHTML =`TICKET ID: ${data._id}`
                          titleDiv.textContent = `TITLE: ${data.title}`
                          detailsDiv.innerHTML = `TICKET DETAILS: ${data.details}`
                            
    
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
               var row = table.insertRow(0);
               row.classList.add('card-header')
   
               var cell1 = row.insertCell(0);
               cell1.setAttribute('class', 'card-body bg-secondary')
               var cell2 = row.insertCell(1)
               cell2.setAttribute('class', 'card-body ')
               var cell3 = row.insertCell(2)
               cell3.setAttribute('class', 'card-body bg-secondary')
               var cell4 = row.insertCell(3);
               cell4.setAttribute('class', 'card-body')
               var cell5 = row.insertCell(4)
               cell5.setAttribute('class', 'card-body bg-secondary')
          
               cell1.innerHTML= `${element.title}`
               cell2.innerHTML = `${element.details}`;
               cell3.innerHTML = `${element.completed}`
               cell4.appendChild(idButton)
               cell5.appendChild(deleteButton)    
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



getAllTasks()
//   delete button
