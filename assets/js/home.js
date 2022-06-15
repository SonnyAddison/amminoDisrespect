var startSearchEl = document.getElementById('startBtn');
var startEl = document.getElementById('start');
var bodyEl = document.getElementById('body');
var instructionEl = document.getElementById('instructions');



headers = {'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'}


var start = function () {
  var apiUrl = 'https://wger.de/api/v2/exercisecategory';  

  fetch(apiUrl,{headers})
    .then(function (resp) {
        console.log(resp);
        return resp.json()
            .then(function (data) {
            console.log(data)        
                for (var i = 0; i < 7; i ++) {              
                var bodyNames = data.results[i].name;
                
                var bodyNameEl = document.createElement('button');
                bodyNameEl.setAttribute('id', bodyNames);
                bodyNameEl.classList = 'listItem flexRow justifySpaceBetween alignCenter listBtn'; 
                bodyNameEl.setAttribute('href', './swole.html?');                              
                
                var titleEl = document.createElement('span');
                titleEl.textContent = bodyNames;            
                bodyNameEl.appendChild(titleEl);
                bodyEl.appendChild(bodyNameEl);

                var absEl = document.getElementById('Abs')
            
                absEl.addEventListener('click', getAbs)
                

                startSearchEl.classList.add('hide'); 
                }   
            })
        })
}

var getAbs = function () {
  var apiUrl = 'https://wger.de/api/v2/exercise/?category=10&language=2&limit=1&offset=1';

  fetch(apiUrl,{headers})
    .then(function (resp) {
        console.log(resp);
        return resp.json()
            .then(function (data) {
            console.log(data)
            for (var i =0 ; i < data.length; i++) {
            var workOutNames = data.results[i].name;
            var descriptions = data.results[i].description;

            var discriptionsEl = document.createElement('div');
            discriptionsEl.classList ='cont2 center 3';
                        
            var titleEl = document.createElement('h1')
            titleEl.textContent = workOutNames;
            titleEl.classList = 'welcome';

            var readOutEl = document.createElement('p');
            readOutEl.classList = 'p'
            readOutEl.textContent = descriptions;                
            }
            
        })
    })
  }
   
/*git var getArms = function () {
  var apiUrl = 'https://wger.de/api/v2/exercise/?category=8&language=2&limit=1&offset=1';

    fetch(apiUrl, {headers}) 
      .then(function (resp) {
        console.log(resp);
      return resp.json()
        .then(function (data) {
          console.log(data)
        })
      })
  }
  
  /*function displayBack () {
    fetch('https://wger.de/api/v2/exercise/?category=12&language=2&limit=1&offset=1', {
      headers: {
        'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'
      }
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) { 
      console.log(data);
    });
  }
  
  function displayCalves () {
    fetch('https://wger.de/api/v2/exercise/?category=14&language=2&limit=1&offset=1', {
      headers: {
        'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'
      }
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) { 
      console.log(data);
    }); 
  }
  
  function displayChest () {
    fetch('https://wger.de/api/v2/exercise/?category=11&language=2&limit=1&offset=1', {
      headers: {
        'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'
      }
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) { 
      console.log(data);
    }); 
  }
  
  function displayLegs () {
    fetch('https://wger.de/api/v2/exercise/?category91&language=2&limit=1&offset=1', {
      headers: {
        'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'
      }
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) { 
      console.log(data);
    }); 
  }
  
  function displayShoulders () {
    fetch('https://wger.de/api/v2/exercise/?category=13&language=2&limit=1&offset=1', {
      headers: {
        'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'
      }
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) { 
      console.log(data);
    });
  }*/

  startSearchEl.addEventListener('click', start);



