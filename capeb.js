   /* NAVBAR ACTIVE LINKS /////////////////////////////////////////////////////////////////////////////////////////////*/

   $(document).ready(function(){
    $('.menu li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
  });

  

  // $(document).ready(function () {
  
  //   $(".menu li").click(function (){
  //     $(".menu li span").addClass("active").siblings().removeClass("active");
  //   });
  // });
  