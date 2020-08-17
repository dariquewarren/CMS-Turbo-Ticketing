

var checkForCookie = ()=>{
  if(!document.cookie){
    return location.assign('/login')
  }
  }
  
  checkForCookie()

  var welcomeDiv = document.getElementById('welcomeID')
var logoutButton = document.getElementById('logoutButton')
var deleteUserButton = document.getElementById('deleteUserButton')
deleteUserButton.addEventListener('click', (e)=>{
  e.preventDefault()
  fetch('/users/me',{
    method: 'DELETE', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      }
 
  }).then((response)=>{
    console.log(document.cookie)
    
    welcomeDiv.innerHTML = `<strong>${response.email} has been deleted </strong>`

    setTimeout(()=>{
     
      window.location.assign('/login')
      
    }, 3000)
  })
})
var mainHeader = document.getElementById('mainHeader')
logoutButton.addEventListener('click', (e)=>{
  e.preventDefault()
  
  fetch('/users/logout').then((response)=>{
    console.log(document.cookie)
   welcomeDiv.innerHTML = `<strong>Logging out</strong>`
console.log(response)
    setTimeout(()=>{
     
      window.location.assign('/login')
      
    }, 1500)
  })
})

  // buttons
  var welcome = ()=>{
    fetch('/users/me').then((response)=>{
      response.json().then((data)=>{
        console.log(data)
        welcomeDiv.innerHTML = `Welcome back, ${data.name}`
      })
    })
  }
  welcome()
   
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
var getAllTasks = ()=>{
    fetch(`/tasks`).then((response)=> {
      response.json().then((data)=>{
           if(data.error) {
           return console.log(data.error)
           }
       
          table.innerHTML = ''


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
                    window.location.assign('/index')
                      })
                
              })

              var idButton = document.createElement('button')
              idButton.innerHTML = 'VIEW OR UPDATE '
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
             cell1.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
    var cell2 = row.insertCell(1)
    cell2.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
    
           
            cell1.innerHTML= `Title:<br> ${element.title}`
            cell2.innerHTML= `Completed:<br>${element.completed}`
            cell2.appendChild(idButton)
            cell1.appendChild(deleteButton)    
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
           
         
        
        var ddwTime = []
        for (i=0;i<data.length;i++){
          var newdate = Date.parse(data[i].createdAt)
          ddwTime.push({
            _id: data[i]._id,
            title: data[i].title,
            completed: data[i].completed,
            oldDate: data[i].updatedAt,
            newDate: newdate})
        }
             console.log('ddwTime', ddwTime)
        var sortedddwtime = ddwTime.sort(function(a,b){
         return a.newDate - b.newDate
        })
        console.log(sortedddwtime)
          //  var timeArray= data.map((d)=>{
        //   var realTime = Date.parse(d.createdAt)

        //   return realTime
        //   })
          // // console.log(timeArray)

          //   const tasks = data.sort((a, b) => b.createdAt - a.createdAt)
          //   console.log(tasks)
          //   var trueTasks = []
          //   tasks.forEach((e)=>{
          //      trueTasks.push(e)
          //   })

           
            table.innerHTML= ``
      
            sortedddwtime.forEach((element)=> {
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
                    window.location.assign('/index')   
                 })
                
              })
                
              var idButton = document.createElement('button')
              idButton.innerHTML = 'VIEW/<br>UPDATE '
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
                   cell1.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
          var cell2 = row.insertCell(1)
          cell2.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
          
                 
                  cell1.innerHTML= `Title:<br> ${element.title}`
                  cell2.innerHTML= `Completed:<br>${element.completed}`
                  cell2.appendChild(idButton)
                  cell1.appendChild(deleteButton)    
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


            var ddwTime = []
            for (i=0;i<data.length;i++){
              var newdate = Date.parse(data[i].updatedAt)
              ddwTime.push({
                _id: data[i]._id,
                title: data[i].title,
                completed: data[i].completed,
                oldDate: data[i].updatedAt,
                newDate: newdate})
            }
            console.log('ddwTime', ddwTime)
            var sortedddwtime = ddwTime.sort(function(a,b){
             return a.newDate - b.newDate
            })
            console.log(sortedddwtime)

            // const tasks = data.sort((a, b) => a.updatedAt - b.updatedAt)
            // console.log(tasks)
            // var trueTasks = []
            // tasks.forEach((e)=>{
            //    trueTasks.push(e)
            //    console.log(e)
            // })

           
            table.innerHTML= ``
            
            sortedddwtime.forEach((element)=> {
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
                      window.location.assign('/index')
                    })
                  
                })
                var idButton = document.createElement('button')
                idButton.innerHTML = 'VIEW/<br>UPDATE '
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
                   cell1.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
          var cell2 = row.insertCell(1)
          cell2.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
          
                 
                  cell1.innerHTML= `Title:<br> ${element.title}`
                  cell2.innerHTML= `Completed:<br>${element.completed}`
                  cell2.appendChild(idButton)
                  cell1.appendChild(deleteButton)    
              });
        })
    })
}
// filter by complete
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
                    window.location.assign('/index')
                })
                
              })  
              var idButton = document.createElement('button')
              idButton.innerHTML = 'VIEW/<br>UPDATE '
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
                                  cell1.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
                         var cell2 = row.insertCell(1)
                         cell2.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
                         
                                
                                 cell1.innerHTML= `Title:<br> ${element.title}`
                                 cell2.innerHTML= `Completed:<br>${element.completed}`
                                 cell2.appendChild(idButton)
                                 cell1.appendChild(deleteButton)    
                               });
        })
    })
}

// filter by incomplete
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
                      window.location.assign('/index')     })
                  
                })

  
                var idButton = document.createElement('button')
                idButton.innerHTML = 'VIEW/<br>UPDATE '
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
                   cell1.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
          var cell2 = row.insertCell(1)
          cell2.setAttribute('class', 'card-body bg-dark text-primary border border-primary text-wrap')
          
                 
                  cell1.innerHTML= `Title:<br> ${element.title}`
                  cell2.innerHTML= `Completed:<br>${element.completed}`
                  cell2.appendChild(idButton)
                  cell1.appendChild(deleteButton)    
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


// 
// getAllTasks()
//   delete button
