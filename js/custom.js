$(function(){
    
// back to top button    
$('.back-top').click(function(){
   $('html, body').animate({scrollTop:0},1500); 
});

    
// wow js
new WOW().init();  
    
    
// back top button fadein fadeout / menu add class  
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
       $('.back-top').fadeIn(500);
    }
    else {
        $('.back-top').fadeOut(500);
    }
    
    if(scrolling > 150){
        $('.main-menu').addClass('menu2');
    }
    else {
        $('.main-menu').removeClass('menu2');
    }
}); 
    
    
//animation scroll js
var html_body = $('html, body');
$('.menu a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});    

     
// venobox
$('.venobox').venobox()    

// typed js
$(".typed").typed({
		strings: ["Developers.", "Designers.", "Coder", "tahsan"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});    


// counter js
$('.counter').counterUp({
    delay: 5,
    time: 1500
});
    
// countdown timer
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Apr 14, 2020 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)    










});