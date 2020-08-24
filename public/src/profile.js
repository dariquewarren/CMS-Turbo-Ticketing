var checkForCookie = ()=>{
  if(!document.cookie){
    return location.assign('/login')
  }
  }
  
  checkForCookie()

  var welcomeDiv = document.getElementById('welcomeID')
var logoutButton = document.getElementById('logoutButton')
var mainHeader = document.getElementById('mainHeader')
logoutButton.addEventListener('click', (e)=>{
  e.preventDefault()
  fetch('/users/logout').then((response)=>{
    console.log(document.cookie)
    mainHeader.setAttribute('class','text-danger text-center')
    mainHeader.innerHTML = `<strong>Logging out</strong>`

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
   
var userNameDiv = document.getElementById('userNameDiv')
var userJobDiv = document.getElementById('userJobDiv')
var userAboutDiv = document.getElementById('userAboutDiv')
var userAgeDiv = document.getElementById('userAgeDiv')
var userEmailDiv = document.getElementById('userEmailDiv')
var avatarImage = document.getElementById('avatarImage')

var quoteDiv = document.getElementById('quoteDiv')
var quoteDiv2 = document.getElementById('quoteDiv2')

var authorDiv = document.getElementById('authorDiv')
var authorDiv2 = document.getElementById('authorDiv2')


// var getQuote=()=>{
//   fetch("https://quotes.stormconsultancy.co.uk/quotes.json", {
//       "method": "GET",
      
//   })
//   .then((response) => {
//       response.json().then((data)=>{
          
//  var index1 = Math.floor(Math.random() * data.length)
//  var index2 = Math.ceil((Math.random() * data.length))
// console.log('data', data)
// console.log('index1', index1)
// console.log('index2', index2)
       
// var quoteArray = Array.from(data[index1].quote)
// console.log(quoteArray)        


// var quoteChunks = quoteArray.length/5
//           var quoteChunks2 = quoteChunks * 2
//           var quoteChunks3 = quoteChunks * 3
//           var quoteChunks4 = quoteChunks * 4
//           var quoteChunks5 = quoteArray.length
//     var segment=  data[index1].quote.substring(0, quoteChunks).toUpperCase()
//     var segment2 =   data[index1].quote.substring(quoteChunks, quoteChunks2).toUpperCase()
//     var segment3 =   data[index1].quote.substring(quoteChunks2, quoteChunks3).toUpperCase()
//     var segment4 =   data[index1].quote.substring(quoteChunks3, quoteChunks4).toUpperCase()
//     var segment5 =   data[index1].quote.substring(quoteChunks4, quoteChunks5).toUpperCase()
    
//     quoteDiv.innerHTML = `<i class="fa fa-quote-left text-success"></i> ...${segment} 
//       <br> ${segment2}<br> ${segment3}<br> ${segment4}<br> ${segment5}... <i class="fa fa-quote-right text-success"></i>`  
//       authorDiv.innerHTML = `${data[index1].author}`

      
//       var quoteArray2 = Array.from(data[index2].quote)
//       console.log(quoteArray2)        
      

//       var secondQuoteChunks = quoteArray2.length/5
//       var secondQuoteChunks2 = quoteChunks * 2
//       var secondQuoteChunks3 = quoteChunks * 3
//       var secondQuoteChunks4 = quoteChunks * 4
//       var secondQuoteChunks5 = quoteArray.length
// var secondSegment=  data[index2].quote.substring(0, secondQuoteChunks).toUpperCase()
// var secondSegment2 =   data[index2].quote.substring(secondQuoteChunks, secondQuoteChunks2).toUpperCase()
// var secondSegment3 =   data[index2].quote.substring(secondQuoteChunks2, secondQuoteChunks3).toUpperCase()
// var secondSegment4 =   data[index2].quote.substring(secondQuoteChunks3, secondQuoteChunks4).toUpperCase()
// var secondSegment5 =   data[index2].quote.substring(secondQuoteChunks4, secondQuoteChunks5).toUpperCase()

// quoteDiv2.innerHTML = `<i class="fa fa-quote-left text-success"></i> ...${secondSegment} 
//   <br> ${secondSegment2}<br> ${secondSegment3}<br> ${secondSegment4}<br> ${secondSegment5}... <i class="fa fa-quote-right text-success"></i>`  
//   authorDiv2.innerHTML = `${data[index2].author}`



//       })
//   })
//   .catch(err => {
//       console.log(err);
//   });
  
// }

// getQuote()


var getUser = ()=>{
    fetch('/users/me').then((response)=>{
        response.json().then((data)=>{
            console.log(data.age)
            console.log('success', data)
          
            userNameDiv.innerHTML = `${data.name.toUpperCase()}`
            userJobDiv.innerHTML = `${data.jobtitle}`
            userAboutDiv.innerHTML = `${data.about}`
            userAgeDiv.innerHTML = `${data.birthday}`
            userEmailDiv.innerHTML = `${data.email.toUpperCase()}`
            avatarImage.src = `/users/${data._id}/avatar`
        })
    })
}
getUser()