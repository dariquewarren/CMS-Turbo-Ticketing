var table = document.getElementById("taskListBody");



var taskIDHeader = document.getElementById('taskID')

var createTaskForm = document.getElementById('createTaskForm')
var selectCategoryButton =document.getElementById('selectCategoryButton')
var completedInput = document.getElementById('completedInput')
var descriptionInput = document.getElementById('descriptionInput')
var detailsInput = document.getElementById('detailsInput')
var ticketOwnerInput = document.getElementById('ticketOwnerInput')
var createTaskButton = document.getElementById('createTaskButton')



var getAllTasks = ()=>{
    fetch(`/tasks`).then((response)=> {
    
    
        response.json().then((data)=>{
           if(data.error) {
           return    messageOne.textContent = `${data.error}`
           }
       
          

          data.forEach((element)=> {
              
              var idButton = document.createElement('button')

              idButton.innerText = 'Click Me'
              idButton.setAttribute('type', 'button')

              idButton.addEventListener('click', (e)=>{
                  e.preventDefault()
                /*
                
                
var createTaskForm = document.getElementById('createTaskForm')
var selectCategoryButton =document.getElementById('selectCategoryButton')
var completedInput = document.getElementById('completedInput')
var descriptionInput = document.getElementById('descriptionInput')
var detailsInput = document.getElementById('detailsInput')
var ticketOwnerInput = document.getElementById('ticketOwnerInput')
var createTaskButton = document.getElementById('createTaskButton')

                */
                 var id = element._id
                 console.log(id)
                fetch(`/tasks/${id}`).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data)

completedInput.setAttribute('placeholder', `${data.completed}`)
descriptionInput.setAttribute('placeholder', `${data.description}`)
detailsInput.setAttribute('placeholder', `${data.details}`)
ticketOwnerInput.setAttribute('placeholder', `${data.ticketOwner}`)
taskIDHeader.innerHTML =`${data._id}`
selectCategoryButton.focus()

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



createTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault()



})

getAllTasks()