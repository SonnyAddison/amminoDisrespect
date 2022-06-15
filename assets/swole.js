var instructionEl = document.getElementById('instructions');
var nameEl = document.getElementById('name');
var descripEl = document.getElementById('description');
var nextEl = document.getElementById('next');
var prevEl = document.getElementById('prev');

headers = {'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'}

var getAbs = function () {
  var apiUrl = 'https://wger.de/api/v2/exercise/?category=10&language=2&limit=1&offset=1';

  fetch(apiUrl,{headers}).then(function (resp) {
        console.log(resp);
        return resp.json().then(function (data) {
            console.log(data)
          
            var workOutNames = data.results[0].name;
            var descriptions = data.results[0].description; 
          
            nameEl.textContent = workOutNames;
            descripEl.textContent = descriptions;
          
            
            
        }) 
  })
}  
getAbs();
