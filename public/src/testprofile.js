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
            console.log('quote array',Array.from(data.quote))


         var quoteArray = Array.from(data.quote)
        
            var quoteChunks = quoteArray.length/5
            var quoteChunks2 = quoteChunks * 2
            var quoteChunks3 = quoteChunks * 3
            var quoteChunks4 = quoteChunks * 4
            var quoteChunks5 = quoteArray.length
      var ddw=  data.quote.substring(0, quoteChunks).toUpperCase()
      var ddw2 =   data.quote.substring(quoteChunks, quoteChunks2).toUpperCase()
      var ddw3 =   data.quote.substring(quoteChunks2, quoteChunks3).toUpperCase()
      var ddw4 =   data.quote.substring(quoteChunks3, quoteChunks4).toUpperCase()
      var ddw5 =   data.quote.substring(quoteChunks4, quoteChunks5).toUpperCase()
      
      console.log(ddw, ddw2,ddw3,ddw4,ddw5)
     

        quoteDiv.innerHTML = `<i class="fa fa-quote-left text-success"></i> ...${ddw} 
        <br> ${ddw2}<br> ${ddw3}<br> ${ddw4}<br> ${ddw5}... <i class="fa fa-quote-right text-success"></i>`  
        authorDiv.innerHTML = `${data.author}`
        
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
          
            userNameDiv.innerHTML = `${data.name.toUpperCase()}`
            userJobDiv.innerHTML = `${data.jobtitle}`
            userAboutDiv.innerHTML = `${data.about}`
            userAgeDiv.innerHTML = `${data.age}`
            userEmailDiv.innerHTML = `${data.email.toUpperCase()}`
        })
    })
}
getUser()