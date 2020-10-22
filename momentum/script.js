function updateClock(){
      var now = new Date();
      var dname = now.getDay(),
          mo = now.getMonth(),
          dnum = now.getDate(),
          yr = now.getFullYear(),
          hou = now.getHours(),
          min = now.getMinutes(),
          sec = now.getSeconds(),
          pe = "AM";

          if(hou >= 12){
            pe = "PM";
          }
          if(hou == 24){
            hou = 0;
          }
          if(hou > 12){
            hou = hou - 0;
          }

          Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
          }

          var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
          var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
          var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
          for(var i = 0; i < ids.length; i++)
          document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

    function initClock(){
      updateClock();
      window.setInterval("updateClock()", 1);
    }

    const base = 'https://raw.githubusercontent.com/revoltkir/setImg/readyimg/';
const images = ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg', '018.jpg', '019.jpg', '020.jpg', '021.jpg', '022.jpg', '023.jpg', '024.jpg'];
let i = 0;

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}
function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

//==================
// DOM Elements
const greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

// Options
const showAmPm = true;

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  switch(hour){

  case 1: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/001.jpg')";
  greeting.textContent = 'Good Night, ';
  break;
  case 2: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/002.jpg')";
  greeting.textContent = 'Good Night, ';
  break;
  case 3: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/003.jpg')";
  greeting.textContent = 'Good Night, ';
  document.body.style.color = 'black';
  break;
  case 4: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/004.jpg')";
  greeting.textContent = 'Good Night, ';
  break;
  case 5: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/005.jpg')";
  greeting.textContent = 'Good Morning, ';
  break;
  case 6: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/006.jpg')";
  greeting.textContent = 'Good Morning, ';
  break;
  case 7: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/007.jpg')";
  greeting.textContent = 'Good Morning, ';
  break;
  case 8: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/008.jpg')";
  greeting.textContent = 'Good Morning, ';
  break;
  case 9: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/009.jpg')";
  greeting.textContent = 'Good Morning, ';
  break;
  case 10: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/010.jpg')";
  greeting.textContent = 'Good Morning, ';
  break;
  case 11: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/011.jpg')";
  greeting.textContent = 'Good Morning, ';
  break;
  case 12: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/012.jpg')";
  greeting.textContent = 'Good Afternoon, ';
  break;
  case 13: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/013.jpg')";
  greeting.textContent = 'Good Afternoon, ';
  break;
  case 14: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/014.jpg')";
  greeting.textContent = 'Good Afternoon, ';
  break;
  case 15:
      document.body.style.backgroundImage =
      "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/015.jpg')";
    greeting.textContent = 'Good Afternoon, ';
    break;
    case 16: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/016.jpg')";
  greeting.textContent = 'Good Afternoon, ';
  break;
  case 17: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/017.jpg')";
  greeting.textContent = 'Good Evening, ';
  break;
  case 18: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/018.jpg')";
  greeting.textContent = 'Good Evening, ';
  break;
  case 19: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/019.jpg')";
  greeting.textContent = 'Good Evening, ';
  break;
  case 20: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/020.jpg')";
  greeting.textContent = 'Good Evening, ';
  break;
  case 21: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/021.jpg')";
  greeting.textContent = 'Good Evening, ';
  break;
  case 22: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/022.jpg')";
  greeting.textContent = 'Good Night, ';
  break;
  case 23: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/023.jpg')";
  greeting.textContent = 'Good Night, ';
  break;
  case 0: document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/revoltkir/setImg/readyimg/024.jpg')";
  greeting.textContent = 'Good Night, ';
  break;
  }

}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null||localStorage.getItem('name') === '') {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null||localStorage.getItem('focus') === '') {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run

setBgGreet();
getName();
getFocus();

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn1 = document.querySelector('.btn1');

// если в ссылке заменить lang=en на lang=ru, цитаты будут на русском языке
// префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов если браузер возвращает ошибку Cross-Origin Request Blocked
async function getQuote() {
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json();
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn1.addEventListener('click', getQuote);

//=======================

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
