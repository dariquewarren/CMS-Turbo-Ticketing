var testDiv = document.getElementById('testDiv')
var testForm = document.getElementById('testForm')

var ddw = {name: 'darique'}
testForm.addEventListener('submit', (e)=>{
   testDiv.innerHTML =`${ddw}` 
})