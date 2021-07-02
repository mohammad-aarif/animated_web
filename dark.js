// jquery 


$(document).ready(function(){
    // Navber togle
    $('.nav-close-btn').click(function(){
        $(".navber-container").slideUp(500)
        $('.nav-arrow').show();
        $('.nav-arrow-shadow').show()
    });
    $('.nav-arrow').click(function(){
        $(this).hide();
        $('.nav-arrow-shadow').hide()
        $(".navber-container").slideDown(500)
        $(".navber-container").css('height', '100vh')
    })
    //about animation

    $(window).on('scroll', function(){
        if($(window).scrollTop()>200){
            $('div').removeClass('q1')
            $('div').removeClass('q2')
            $('.quate1').css('animation', 'quate1 3s linear forwards');
            $('.quate2').css('animation', 'quate2 3s linear forwards');
            $('.about-img').css('animation', 'about-content-anim 3s linear forwards');
            $('.about-content').css('animation', 'about-content-anim 3s linear forwards');
        }
    })

    //Portfolio icon animation
    $('.portfolio-card').hover(function(){
        $('.portfolio-icon').css('animation','icon-anim 3s linear forwards');
    })

})


// wish
function wish(){
    var curtime = new Date().getHours();
    if(curtime >= 6 && curtime < 12){
        document.getElementById('wishmsg').innerHTML = "MORNING";
    }
    else if(curtime >= 12 && curtime <= 18){
        document.getElementById('wishmsg').innerHTML = "AFTERNOON";
    }
    else if(curtime > 18 && curtime < 21){
        document.getElementById('wishmsg').innerHTML = "EVENING";
    }
    else{
        document.getElementById('wishmsg').innerHTML = "NIGHT";
    }

}
wish();

// type writting

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};