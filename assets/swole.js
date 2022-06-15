var instructionEl = document.getElementById('instructions');
var nextEl = document.getElementById('next');
var prevEl = document.getElementById('prev');



function getAbs () {

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