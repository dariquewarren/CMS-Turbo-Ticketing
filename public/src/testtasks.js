var testForm = document.getElementById('testForm')
var messageOne = document.getElementById('testParagraph')
var testDiv = document.getElementById('testDiv')
var testList = document.getElementById('testList')


testForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch(`/tasks`).then((response)=> {
    
    
        response.json().then((data)=>{
           if(data.error) {
           return    messageOne.textContent = `${data.error}`
           }
           console.log(data)
           data.forEach((e)=>{
            console.log(e.description)

           })
    })
    })
    
})

