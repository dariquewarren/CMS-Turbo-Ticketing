var testForm = document.getElementById('testForm')
var messageOne = document.getElementById('testParagraph')
var testDiv = document.getElementById('testDiv')
var testList = document.getElementById('testList')

var table = document.getElementById("taskListBody");

    /*

setup sorting functions

by category
by completed(true)
by completed(false)
by created at
by updated at

*/

/*

create and wire up task buttons

*/

var getAllTasks = ()=>{
    fetch(`/tasks`).then((response)=> {
    
    
        response.json().then((data)=>{
           if(data.error) {
           return    messageOne.textContent = `${data.error}`
           }
       
          
          data.forEach((e)=> {
    
            table.classList.add('table','table-striped')
            var row = table.insertRow(0);
            row.classList.add('card-body')
            var cell1 = row.insertCell(0);
            cell1.classList.add('card')
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2)
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4)
            cell1.innerHTML = `CATEGORY`;
            cell2.innerHTML = `${e.description}`
            cell3.innerHTML= `${e.completed}`
            cell4.innerHTML = `${e.createdAt}`
            cell5.innerHTML= `${e.updatedAt}`
          });
          
    })
    })
    
}


testForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    getAllTasks()

})




// buttons

var byCreatedAt = () =>{
    fetch('/tasks').then((response)=>{
        response.json().then((data)=>{
         if(data.error){
                alert(data.error)
            }

        //  var trueTasks =  data.filter((e)=>{
        //     if (e.completed === true){
        //         return e
        //     }
        //    })

        //    console.log(trueTasks)

        })
    })
}



var byUpdatedAt = () =>{
    fetch('/tasks').then((response)=>{
        response.json().then((data)=>{
         if(data.error){
                alert(data.error)
            }

        //  var trueTasks =  data.filter((e)=>{
        //     if (e.completed === true){
        //         return e
        //     }
        //    })

        //    console.log(trueTasks)

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
               cell1.innerHTML = `${e.category}`;
               cell2.innerHTML = `${e.description}`
               cell3.innerHTML= `${e.completed}`
               cell4.innerHTML = `${e.createdAt}`
               cell5.innerHTML= `${e.updatedAt}`
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
               cell1.innerHTML = `${e.category}`;
               cell2.innerHTML = `${e.description}`
               cell3.innerHTML= `${e.completed}`
               cell4.innerHTML = `${e.createdAt}`
               cell5.innerHTML= `${e.updatedAt}`
             });
        })
    })
}



var completeButton = document.getElementById('completeButton')
var incompleteButton = document.getElementById('incompleteButton')
var createdButton = document.getElementById('createdButton')
var updatedButton = document.getElementById('updatedButton')

completeButton.addEventListener('submit', (e)=>{
    e.preventDefault()
    completeTasksOnly()
})
incompleteButton.addEventListener('submit', (e)=>{
    e.preventDefault()
    incompleteTasksOnly()
})


