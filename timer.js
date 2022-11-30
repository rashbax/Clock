$(document).ready(function(){

    let hh = 0;
    let mm = 0;
    let ss = 0;

    // (hh < 10) ? hh = '0'+ hh : hh ;
    // (mm < 10) ? mm = '0'+ mm : mm;
    // (ss < 10) ? ss = '0' + ss : ss ;

    $('.content__timer').html(hh +':' + mm + ':' + ss)

    let isPaused = false;

    function playTimer() {
        
        if (isPaused === false) {
            ss==ss;
        }else{
            ss ++
        }
        $('.content__timer').html(hh +':' + mm + ':' + ss)
        
        if (ss == 60) {
            ss = 0;
            mm ++;
        } 
        if (mm == 60) {
            mm = 0;
            hh ++;
        }
        
        
    }

   

    let start = $('.s')
    start.click(function (e) { 
        e.preventDefault();
        isPaused = true;
        
    });

    $('.p').click(function(e){
        e.preventDefault()

        isPaused = false;
    })

    $('.r').click(e => {
        e.preventDefault()
        hh=ss=mm=0;
        isPaused = false
    })

    

setInterval(playTimer,0)
    
})