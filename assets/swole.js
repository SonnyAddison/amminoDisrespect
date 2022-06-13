var testButton = document.getElementById('testBtn')

var template = 'https://wger.de/api/v2/public-templates/?app_key=7ee914cf916f77eb82f1f2769585c24eb087b281&format=api'

function getTemp () {
    // The brow{ser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    fetch(template, {
        cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

eventTarget.addEventListener('click', getTemp);