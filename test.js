//  Start iq

$(document).ready(function(){
   $("test").ready(function(){
      $(".YUsama").fadeIn(2000);
   });
  });



$(document).ready(function(){
   $("test").ready(function(){
      $(".textname").fadeIn(1000);
      $(".textjob").fadeIn(1000);
   });
  });


let demoOffset =$(".More").offset().top;

$(window).scroll(function () { 
   let wScroll = $(window).scrollTop();
   if (wScroll > demoOffset){
      $('.More').eq(0).fadeIn(2000,()=>{
         $('.about').eq(0).fadeIn(2000, ()=> {
            $('.Victory').eq(0).fadeIn(2000, ()=>{
               $('.Calm').eq(0).fadeIn(2000, ()=> {
                  $('.Skills').eq(0).fadeIn(2000, ()=>{
                     $('.contact').eq(0).fadeIn(2000);
                  });
               });
            });
         });
      });
   };
});




