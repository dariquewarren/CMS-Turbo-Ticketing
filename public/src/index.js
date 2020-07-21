

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
              idButton.innerText = 'UPDATE '
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
                  location.assign(`/tickets?${element._id}`)
                  
                })

            table.classList.add('table','table-striped')
            var row = table.insertRow(0);
            row.classList.add('card-header')

            var cell1 = row.insertCell(0);
            cell1.setAttribute('class', 'card-body bg-dark')
            var cell2 = row.insertCell(1)
            cell2.setAttribute('class', 'card-body bg-dark')
            var cell3 = row.insertCell(2)
            cell3.setAttribute('class', 'card-body bg-dark')
            
            cell1.innerHTML= `${element.title}`
            cell2.appendChild(idButton)
            cell3.appendChild(deleteButton)    
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
              idButton.innerText = 'UPDATE '
              idButton.setAttribute('type', 'button')
              idButton.setAttribute('class', 'card bg-success text-white')
              
              idButton.setAttribute('data-toggle', "tooltip")
              
              idButton.setAttribute('data-html', 'true')
              
              idButton.setAttribute('title', `display task above`)
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    location.assign(`/tickets?${element._id}`)
                  })

                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body bg-dark')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body bg-dark')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body bg-dark')
                
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
                idButton.innerText = 'UPDATE '
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
                
                idButton.setAttribute('data-toggle', "tooltip")
                
                idButton.setAttribute('data-html', 'true')
                
                idButton.setAttribute('title', `display task above`)
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    location.assign(`/tickets?${element._id}`)
                  })
  

                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body bg-dark')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body bg-dark')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body bg-dark')
                
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
                    window.location.assign('/index.html')
                })
                
              })  
              var idButton = document.createElement('button')
              idButton.innerText = 'UPDATE '
              idButton.setAttribute('type', 'button')
              idButton.setAttribute('class', 'card bg-success text-white')
              
              idButton.setAttribute('data-toggle', "tooltip")
              
              idButton.setAttribute('data-html', 'true')
              
              idButton.setAttribute('title', `display task above`)
  
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    location.assign(`/tickets?${element._id}`)
                                 })

                table.classList.add('table','table-striped')
                var row = table.insertRow(0);
                row.classList.add('card-header')
    
                var cell1 = row.insertCell(0);
                cell1.setAttribute('class', 'card-body bg-dark')
                var cell2 = row.insertCell(1)
                cell2.setAttribute('class', 'card-body bg-dark')
                var cell3 = row.insertCell(2)
                cell3.setAttribute('class', 'card-body bg-dark')
                
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
                idButton.innerText = 'UPDATE '
                idButton.setAttribute('type', 'button')
                idButton.setAttribute('class', 'card bg-success text-white')
                
                idButton.setAttribute('data-toggle', "tooltip")
                
                idButton.setAttribute('data-html', 'true')
                
                idButton.setAttribute('title', `display task above`)
                idButton.addEventListener('click', (e)=>{
                    e.preventDefault()
                    location.assign(`/tickets?${element._id}`)
                  })

               table.classList.add('table','table-striped')
               var row = table.insertRow(0);
               row.classList.add('card-header')
   
               var cell1 = row.insertCell(0);
               cell1.setAttribute('class', 'card-body bg-dark')
               var cell2 = row.insertCell(1)
               cell2.setAttribute('class', 'card-body bg-dark')
               var cell3 = row.insertCell(2)
               cell3.setAttribute('class', 'card-body bg-dark')
               
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
console.log('lolololo')
getAllTasks()
})



getAllTasks()
//   delete button
