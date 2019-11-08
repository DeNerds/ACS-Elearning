
//smooth scroll library

const scroll = new SmoothScroll('.nav-link[href*="#"]',{
  speed:1000
});


//smooth scroll by Hammonds in jquery


$('.nav-link ').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();
        console.log(".nav-link");

        const hash = this.hash;

        $('html, body').animate({
            scrollTop:$(hash).offset().top
        },2000);
    }
});