$(document).ready(function(){

    function currentTime() {
        let data = new Date();
    let hour = data.getHours();
    let secon = data.getSeconds()
    let min = data.getMinutes();
  

    (min < 10) ? min = '0'+ min : min ;
    (hour < 10) ? hour = '0'+ hour : hour;
    (secon < 10) ? secon = '0' + secon : secon ;

    let showTime = hour + ':' + min + ':' + secon;

    $('.time').html(showTime)
        
    }
    setInterval(currentTime,1000)
    
    
    function currentDate() {
        let data = new Date();
    let dd = data.getDate()
    let mm = data.getMonth() +1
    let yy = data.getFullYear()
    console.log(data.getMonth());

     (dd < 10) ? dd = '0'+ dd : dd;
     (mm < 10) ? mm = '0' + mm : mm;
     (yy < 10) ? yy = '0' + yy : yy;

    let showDate = dd +':'+ mm + ':' + yy
    $('.date').html(showDate)
    }
    currentDate();
let d = 270
    function roundClock() {
        let data = new Date();
        let audio = new Audio('tic.mp3')
        let secon = data.getSeconds()
        $('.strelka').css({'transform':'rotate('+ secon *6+  'deg)'})
        // audio.play()
    }
    setInterval(roundClock,1000)
    
})
