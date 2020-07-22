var userNameDiv =document.getElementById('userNameDiv')
var userJobDiv = document.getElementById('userJobDiv')
var userAboutDiv = document.getElementById('userAboutDiv')
var userAgeDiv = document.getElementById('userAgeDiv')
var userEmailDiv =document.getElementById('userEmailDiv')


var quoteDiv = document.getElementById('quoteDiv')
var authorDiv = document.getElementById('authorDiv')

var getQuote=()=>{
    fetch("http://quotes.stormconsultancy.co.uk/random.json", {
        "method": "GET",
        
    })
    .then((response) => {
        response.json().then((data)=>{
            console.log(data)
        authorDiv.innerHTML = `${data.author}`  
        quoteDiv.innerHTML = `${data.quote}`
        
        })
    })
    .catch(err => {
        console.log(err);
    });
    
}

getQuote()


var getUser = ()=>{
    fetch('/users/me').then((response)=>{
        response.json().then((data)=>{
            console.log(data.age)
            console.log('success', data)
            userNameDiv.innerHTML = `${data.name}`
            userJobDiv.innerHTML = `${data.jobtitle}`
            userAboutDiv.innerHTML = `${data.about}`
            userAgeDiv.innerHTML = `${data.age}`
            userEmailDiv.innerHTML = `${data.email}`
        })
    })
}
getUser()