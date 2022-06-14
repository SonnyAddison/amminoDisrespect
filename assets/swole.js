var startSearchEl = document.getElementById('startBtn');
var startEl = document.getElementById('start');
var workOutEl = document.getElementById('workouts');


const apiKey = '7ee914cf916f77eb82f1f2769585c24eb087b281';


function start () {

  fetch('https://wger.de/api/v2/public-templates', {
    headers: {
      'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'
    }
  })
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (var i = 0; i < 16; i ++) {
    console.log(data.results[i].name);
    if (!data.results[i].name) {
      return null;
    } 
    var workOutNames = data.results[i].name;

    var workOutNameEl = document.createElement('button');
    workOutNameEl.classList = 'listItem flexRow justifySpaceBetween alignCenter listBtn';

    var titleEl = document.createElement('span');
    titleEl.textContent = workOutNames;

    workOutNameEl.appendChild(titleEl);
    workOutEl.appendChild(workOutNameEl);

    startSearchEl.classList.add('hide');

    }
  }); 
}

function displayWorkOut () {
  
}


function displaySelectTemplate () { 
  var templateContainerEl = document.createElement('div');
  var templateHeaderEl = document.createElement('h2');
  var templateBox = document.createElement('div');
  

  templateHeaderEl.textContent ='Select Workout';

  templateContainerEl.classList = 'col-12 col-md-8';

  templateBox.classList = 'list-item flex-row justify-space-between align-center';




}

  






startSearchEl.addEventListener('click', start)


