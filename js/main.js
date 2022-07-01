(function (){
	const header = document.querySelector('.header');
	window.onscroll=()=> {
		if (window.pageYOffset > 150) {
			header.classList.add('header__aktiv');
		} else{
			header.classList.remove('header__aktiv');
		}
};
}());

$(document).ready(function(){
    $('.slaeder__top').slick({
        dots: true,
        autoplaySpeed:3000,
        infinite: true,
        speed: 1500,
        autoplay:true,
    });

    $('.Projects__top').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplaySpeed:3000,
       infinite: true,
       speed: 1000,
       autoplay:true,
       responsive: [
         {
         breakpoint: 1181,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
          }
      },
      {
        breakpoint: 850,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
         }
     },
    ]
});

$('.rave__top').slick({
    dots: true,
    infinite: true,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed:1500,
    infinite: true,
    speed: 1000,
    autoplay:true,
    responsive: [{
        breakpoint: 1251,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
        
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
        
      },

      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
        
      },
    ]
});
});



function slowScroll(id){
    $('html,bode').animate({
        scrollTop:$(id).offset().top
    },500);
}

$(document).on("scroll", function(){
    if ($(window).scrollTop()===0)
  $("header").removeClass("fixed");
else 
  $("header").attr("class","fixed");
});





