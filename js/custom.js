$(document).ready(function(){

    //scrolling function start
    $(window).scroll(function(){

        //menu fixed
        if($(window).scrollTop() > 100){
            $(".main_menu").addClass('menu_fixed')
        }
        else{
            $(".main_menu").removeClass('menu_fixed')
        }

        //show hide back to top btn
        if($(window).scrollTop() > 300){
            $(".back_to_top").fadeIn()
        }
        else{
            $(".back_to_top").fadeOut()
        }
    })

    //go to top
    $(".back_to_top").click(function(){
        $("html,body").animate({
            scrollTop : "0",
        },3000)
    })

    // slider for banner
    $(".banner_slider").slick({
        speed: 700,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2000,
        prevArrow: '<i class="fa-solid fa-circle-arrow-left left"></i>',
        nextArrow: '<i class="fa-solid fa-circle-arrow-right right"></i>',
    });
    //slide for service item
    $('.service_slider').slick({
        vertical:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        centerMode:true,
        centerPadding:'0',
        prevArrow: '<i class="fa-solid fa-chevron-up top"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-down btm"></i>',
        focusOnSelect:true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical:false,
              }
            }
          ]
    });

    //for testimonial image slider
    $('.testi_slider').slick({
        vertical:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        centerMode:true,
        centerPadding: '0',
        focusOnSelect:true,
        prevArrow: '<i class="fa-solid fa-chevron-up top"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-down btm"></i>',
        asNavFor:".text_slider",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical:false,
            }
          }
        ]
    })

    //for testimonial image slider
    $('.text_slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        arrows:false,
        fade:true,
        asNavFor:".testi_slider",
    })
    //counter up
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
  
  //for portfolio venobox
  new VenoBox({
    selector: '.venobox',
    spinner: 'plane'
});
});


