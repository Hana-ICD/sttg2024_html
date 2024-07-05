var doc = document.documentElement;
var topPosition = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
if (topPosition != null && topPosition == 0) {}

$(window).scroll(function(){  
  
  // if($(window).width() > 991) {
  //   $("[data-ani-top-view]").each(function(){
  //     let elementTop = $(this).outerHeight() / 2;
  //     if($(window).scrollTop() != null && $(window).scrollTop() <= elementTop) {
  //       if(!$(this).hasClass("data-ani-view")) {
  //         $("[data-ani-top-view").addClass('data-ani-view'); 
  //       }
  //     }
  //   })
  
  //   $("[data-ani-view]").each(function(){
  //     var hT = $(this).offset().top,
  //       hH = $(this).outerHeight(),
  //       wH = $(window).height(),
  //       wS = $(window).scrollTop();
  //     if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
  //       $(this).addClass('data-ani-view');
  //     } else {
  //       $(this).removeClass('data-ani-view');
  //     }
  //   })
  
  //   $("[data-ani-first-view").each(function(){ 
  //     var hT = $(this).offset().top,
  //       hH = $(this).outerHeight(),
  //       wH = $(window).height(),
  //       wS = $(window).scrollTop();
  //     if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
  //       if(!$(this).hasClass('data-ani-view')) {
  //         $(this).addClass('data-ani-view'); 
  //       }   
  //     } 
  //   })
  // }  

  // if($(window).width() < 992) {
  //   $(".js-ran-number").each(function(){     
  //     var hT = $(this).offset().top,
  //       hH = $(this).outerHeight(),
  //       wH = $(window).height(),
  //       wS = $(window).scrollTop();
  //     if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
  //       if(!$(this).parents(".data-project").hasClass('data-ani-view')) {
  //         $(this).parents(".data-project").addClass('data-ani-view'); 
  //       }
  //     } 
  //   })
  // }
})

// function dataTopView() {  
//   $("[data-ani-top-view]").each(function(){
//     if(!$(this).hasClass("data-ani-view")) {
//       $("[data-ani-top-view").addClass('data-ani-view'); 
//     }
//   })
// }

// appear

$("[ani-appear]").appear(function(){
  $(this).addClass("is-appear");
});

function funViewVisible() {
  let isV = false;
  $("[data-appear-visible]").each(function(){
    let _this=$(this);
    _this.appear(function(){
      isV = true;
    })
    if(isV) {
      _this.addClass("is-appear");
    }
    else {
      _this.removeClass("is-appear");
    }
  })
}
funViewVisible()
$(window).scroll(function(){ 
  funViewVisible();
})
  

// onload at onload.js file