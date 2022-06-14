var startSearchEl = document.getElementById('startBtn');
var startEl = document.getElementById('start');
var workOutEl = document.getElementById('workouts');


const apiKey = '7ee914cf916f77eb82f1f2769585c24eb087b281';


function start () {

  fetch('https://wger.de/api/v2/exercisecategory', {
    headers: {
      'Authorization': 'Token 7ee914cf916f77eb82f1f2769585c24eb087b281'
    }
  })
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (var i = 0; i < 7; i ++) {
    console.log(data.results[i].name);   

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

function displayAbs () {

  fetch('https://wger.de/api/v2/exercise/?category=10&language=2&limit=1&offset=1', {
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

function displayArms () {

  fetch('https://wger.de/api/v2/exercise/?category=8&language=2&limit=1&offset=1', {
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

function displayBack () {
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
}


  

startSearchEl.addEventListener('click', start)


