var cities = document.getElementsByClassName('city');
var city = cities[0];

var khouribga = document.getElementById('khouribga');
var casa = document.getElementById('casa');
var rabat = document.getElementById('rabat');
var bmellal = document.getElementById('beni-mellal');
var tanger = document.getElementById('tanger');
var tetouan = document.getElementById('tetouan');
var agadir = document.getElementById('agadir');
var hoceima = document.getElementById('hoceima');



let imageContainer=document.querySelector('.weather-icon')

var weatIcon = document.getElementsByClassName('weather-icon');
var wetDescription = document.getElementsByClassName('weather-description');
var weatherArray = [];
for (let i = 1; i <= 45; i++) {
  weatherArray.push(i);
}

document.querySelector('#btn-khouribga').addEventListener("click", function(event){
    var cityTitle = khouribga.querySelector('h3').textContent;
    var weatherTitle = wetDescription[0].querySelector('h1');
    var weatherText = wetDescription[0].querySelector('h2');
    var weatherIcon = document.querySelector('.weather-icon'); 

    if (cityTitle === 'khouribga') {
      let randomNumber = weatherArray[Math.floor(Math.random() * weatherArray.length)];
      if (randomNumber > 10 && randomNumber <=20) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is a little cloudy today`;
        weatherIcon.style.backgroundImage = "url('cloudyrain.png')"; 
      } else if (randomNumber > 20 && randomNumber <=30) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is sunny today`;
        weatherIcon.style.backgroundImage = "url('cloudysun.png')"; 
      } else if (randomNumber > 30 && randomNumber <= 45) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is hot today)`;
        weatherIcon.style.backgroundImage = "url('sunnyday.png')"; 
      } else {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is so cold today`;
        weatherIcon.style.backgroundImage = "url('rainyday.png')"; 
      }
      weatherIcon.style.backgroundSize = 'cover'; 
      weatherIcon.style.backgroundPosition = 'center';

      document.querySelector('#btn-khouribga').removeEventListener('click',arguments.callee);
    } 
});


document.querySelector('#btn-casa').addEventListener("click", function(event){
    var cityTitle = casa.querySelector('h3').textContent;
    var weatherTitle = wetDescription[0].querySelector('h1');
    var weatherText = wetDescription[0].querySelector('h2');
    var weatherIcon = document.querySelector('.weather-icon'); 

    if (cityTitle === 'casa') {
      let randomNumber = weatherArray[Math.floor(Math.random() * weatherArray.length)];
      if (randomNumber > 10 && randomNumber <=20) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is a little cloudy today`;
        weatherIcon.style.backgroundImage = "url('cloudyrain.png')"; 
      } else if (randomNumber > 20 && randomNumber <=30) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is sunny today`;
        weatherIcon.style.backgroundImage = "url('cloudysun.png')"; 
      } else if (randomNumber > 30 && randomNumber <= 45) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is hot today)`;
        weatherIcon.style.backgroundImage = "url('sunnyday.png')"; 
      } else {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is so cold today`;
        weatherIcon.style.backgroundImage = "url('rainyday.png')"; 
      }
      weatherIcon.style.backgroundSize = 'cover'; 
      weatherIcon.style.backgroundPosition = 'center';

      document.querySelector('#btn-casa').removeEventListener('click',arguments.callee);
    } 
});

document.querySelector('#btn-rabat').addEventListener("click", function(event){
    var cityTitle = rabat.querySelector('h3').textContent;
    var weatherTitle = wetDescription[0].querySelector('h1');
    var weatherText = wetDescription[0].querySelector('h2');
    var weatherIcon = document.querySelector('.weather-icon'); 

    if (cityTitle === 'rabat') {
      let randomNumber = weatherArray[Math.floor(Math.random() * weatherArray.length)];
      if (randomNumber > 10 && randomNumber <=20) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is a little cloudy today`;
        weatherIcon.style.backgroundImage = "url('cloudyrain.png')"; 
      } else if (randomNumber > 20 && randomNumber <=30) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is sunny today`;
        weatherIcon.style.backgroundImage = "url('cloudysun.png')"; 
      } else if (randomNumber > 30 && randomNumber <= 45) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is hot today)`;
        weatherIcon.style.backgroundImage = "url('sunnyday.png')"; 
      } else {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is so cold today`;
        weatherIcon.style.backgroundImage = "url('rainyday.png')"; 
      }
      weatherIcon.style.backgroundSize = 'cover'; 
      weatherIcon.style.backgroundPosition = 'center';

      document.querySelector('#btn-rabat').removeEventListener('click',arguments.callee);
    } 
});

document.querySelector('#btn-mellal').addEventListener("click", function(event){
    var cityTitle = bmellal.querySelector('h3').textContent;
    var weatherTitle = wetDescription[0].querySelector('h1');
    var weatherText = wetDescription[0].querySelector('h2');
    var weatherIcon = document.querySelector('.weather-icon'); 

    if (cityTitle === 'beni-mellal') {
      let randomNumber = weatherArray[Math.floor(Math.random() * weatherArray.length)];
      if (randomNumber > 10 && randomNumber <=20) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is a little cloudy today`;
        weatherIcon.style.backgroundImage = "url('cloudyrain.png')"; 
      } else if (randomNumber > 20 && randomNumber <=30) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is sunny today`;
        weatherIcon.style.backgroundImage = "url('cloudysun.png')"; 
      } else if (randomNumber > 30 && randomNumber <= 45) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is hot today)`;
        weatherIcon.style.backgroundImage = "url('sunnyday.png')"; 
      } else {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is so cold today`;
        weatherIcon.style.backgroundImage = "url('rainyday.png')"; 
      }
      weatherIcon.style.backgroundSize = 'cover'; 
      weatherIcon.style.backgroundPosition = 'center';

      document.querySelector('#btn-mellal').removeEventListener('click',arguments.callee);
    } 
});

document.querySelector('#btn-tanger').addEventListener("click", function(event){
    var cityTitle = tanger.querySelector('h3').textContent;
    var weatherTitle = wetDescription[0].querySelector('h1');
    var weatherText = wetDescription[0].querySelector('h2');
    var weatherIcon = document.querySelector('.weather-icon'); 

    if (cityTitle === 'tanger') {
      let randomNumber = weatherArray[Math.floor(Math.random() * weatherArray.length)];
      if (randomNumber > 10 && randomNumber <=20) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is a little cloudy today`;
        weatherIcon.style.backgroundImage = "url('cloudyrain.png')"; 
      } else if (randomNumber > 20 && randomNumber <=30) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is sunny today`;
        weatherIcon.style.backgroundImage = "url('cloudysun.png')"; 
      } else if (randomNumber > 30 && randomNumber <= 45) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is hot today)`;
        weatherIcon.style.backgroundImage = "url('sunnyday.png')"; 
      } else {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is so cold today`;
        weatherIcon.style.backgroundImage = "url('rainyday.png')"; 
      }
      weatherIcon.style.backgroundSize = 'cover'; 
      weatherIcon.style.backgroundPosition = 'center';

      document.querySelector('#btn-tanger').removeEventListener('click',arguments.callee);
    } 
});

document.querySelector('#btn-tetouan').addEventListener("click", function(event){
    var cityTitle = tetouan.querySelector('h3').textContent;
    var weatherTitle = wetDescription[0].querySelector('h1');
    var weatherText = wetDescription[0].querySelector('h2');
    var weatherIcon = document.querySelector('.weather-icon'); 

    if (cityTitle === 'tetouan') {
      let randomNumber = weatherArray[Math.floor(Math.random() * weatherArray.length)];
      if (randomNumber > 10 && randomNumber <=20) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is a little cloudy today`;
        weatherIcon.style.backgroundImage = "url('cloudyrain.png')"; 
      } else if (randomNumber > 20 && randomNumber <=30) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is sunny today`;
        weatherIcon.style.backgroundImage = "url('cloudysun.png')"; 
      } else if (randomNumber > 30 && randomNumber <= 45) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is hot today)`;
        weatherIcon.style.backgroundImage = "url('sunnyday.png')"; 
      } else {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is so cold today`;
        weatherIcon.style.backgroundImage = "url('rainyday.png')"; 
      }
      weatherIcon.style.backgroundSize = 'cover'; 
      weatherIcon.style.backgroundPosition = 'center';

      document.querySelector('#btn-tetouan').removeEventListener('click',arguments.callee);
    } 
});

document.querySelector('#btn-agadir').addEventListener("click", function(event){
    var cityTitle = agadir.querySelector('h3').textContent;
    var weatherTitle = wetDescription[0].querySelector('h1');
    var weatherText = wetDescription[0].querySelector('h2');
    var weatherIcon = document.querySelector('.weather-icon'); 

    if (cityTitle === 'agadir') {
      let randomNumber = weatherArray[Math.floor(Math.random() * weatherArray.length)];
      if (randomNumber > 10 && randomNumber <=20) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is a little cloudy today`;
        weatherIcon.style.backgroundImage = "url('cloudyrain.png')"; 
      } else if (randomNumber > 20 && randomNumber <=30) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is sunny today`;
        weatherIcon.style.backgroundImage = "url('cloudysun.png')"; 
      } else if (randomNumber > 30 && randomNumber <= 45) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is hot today)`;
        weatherIcon.style.backgroundImage = "url('sunnyday.png')"; 
      } else {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is so cold today`;
        weatherIcon.style.backgroundImage = "url('rainyday.png')"; 
      }
      weatherIcon.style.backgroundSize = 'cover'; 
      weatherIcon.style.backgroundPosition = 'center';

      document.querySelector('#btn-agadir').removeEventListener('click',arguments.callee);
    } 
});

document.querySelector('#btn-hoceima').addEventListener("click", function(event){
    var cityTitle = hoceima.querySelector('h3').textContent;
    var weatherTitle = wetDescription[0].querySelector('h1');
    var weatherText = wetDescription[0].querySelector('h2');
    var weatherIcon = document.querySelector('.weather-icon'); 

    if (cityTitle === 'hoceima') {
      let randomNumber = weatherArray[Math.floor(Math.random() * weatherArray.length)];
      if (randomNumber > 10 && randomNumber <=20) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is a little cloudy today`;
        weatherIcon.style.backgroundImage = "url('cloudyrain.png')"; 
      } else if (randomNumber > 20 && randomNumber <=30) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is sunny today`;
        weatherIcon.style.backgroundImage = "url('cloudysun.png')"; 
      } else if (randomNumber > 30 && randomNumber <= 45) {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is hot today)`;
        weatherIcon.style.backgroundImage = "url('sunnyday.png')"; 
      } else {
        weatherTitle.innerHTML = randomNumber + '&deg;';
        weatherText.textContent = `${cityTitle} is so cold today`;
        weatherIcon.style.backgroundImage = "url('rainyday.png')"; 
      }
      weatherIcon.style.backgroundSize = 'cover'; 
      weatherIcon.style.backgroundPosition = 'center';

      document.querySelector('#btn-hoceima').removeEventListener('click',arguments.callee);
    } 
});
