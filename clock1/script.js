function clock(){
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h < 10 ? '0' + h: h;
    minutes.innerHTML = m < 10? '0' + m: m;
    seconds.innerHTML = s < 10 ? '0' + s: s;

}

var interval = setInterval(clock, 1000);