// animate.css 

function bounceAnimation(){
    const courses = document.querySelector('.courses');
    const card = document.querySelector('.card');
    courses.addEventListener('mouseOver',(e)=>{
        card.classList.add('animated' , 'bounce');    
    })
    courses.addEventListener('mouseOut',(e)=>{
        card.classList.remove('animated' , 'bounce');
    })
    

}

bounceAnimation();

//smooth scroll library

const scroll = new SmoothScroll('.navbar ul li a[href*="#"]',{
    speed:1000
});


//smooth scroll by Hammonds in jquery


$('.nav-link ').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop:$(hash).offset().top
        },1000);
    }
});