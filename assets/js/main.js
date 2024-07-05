startDoc();
function startDoc() {
  var doc = document.documentElement;
  var topPosition = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  if(topPosition < 50) {
    $(".scroll-progress").fadeOut();
    $(".l-header").removeClass("is-sticky");
  }
  else {
    $(".scroll-progress").fadeIn();
    $(".l-header").addClass("is-sticky");
  }
}

function setHeaderSticky() {
  if(document.documentElement.scrollTop > 50) {
    $(".l-header").addClass("is-sticky");
  }
  else {
    $(".l-header").removeClass("is-sticky");
  }
}

setHeaderSticky();
$(window).scroll(function() {
  setHeaderSticky();
  if($(window).width() > 991) {}
})

// banner height
function heightBanner() {
  const screenY = $(window).height();
  if($(window).width() > 991) {
    $(".top-banner").css("height", screenY);
  }
  else {
    $(".top-banner").css("height", "auto");
  }
}

heightBanner();

// cursor
  const cursorBig = document.querySelector('.magic-cursor-wrapper');
  const positionElement = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;    
    cursorBig.style.transform = `translate(-50%, -50%) translate3d(${mouseX}px, ${mouseY}px, 0)`; 
  }

// mousemove
$('.topSwiper').mouseenter(function(){
  $(".magic-cursor-wrapper").addClass("sliderhover");
  window.addEventListener('mousemove', positionElement)
});
// mouseout 
$('.topSwiper').mouseleave(function(){
  $(".magic-cursor-wrapper").removeClass("sliderhover");
  window.removeEventListener('mousemove', positionElement)
});

function jsCollapse() {
  $(".js-collappse").each(function(){
    $(this).find(".collapse-item").each(function(){
      let clTitle = $(this).find(".collapse-title").outerHeight();
      let clContent = $(this).find(".collapse-content").outerHeight();

      if($(this).hasClass("open")) {
        $(this).css("height", clTitle + clContent + "px");
      }
      else {
        $(this).css("height", clTitle + 15 + "px");
      }
      
      $(this).on("click", function(){
        if($(this).hasClass("open")) {
          $(this).removeClass("open")
          $(this).css("height", clTitle + 15 + "px");
        }
        else {
          $(".collapse-item").removeClass("open");
          $(".collapse-item").css("height", function(){
            return $(this).find(".collapse-title").outerHeight() + 15 + "px";
          })
          $(this).addClass("open");
          $(this).css("height", clTitle + clContent + "px");
        }
      })
    })    
  })
}

jsCollapse();

function jsNumberRang() {
  $(".js-ran-number").each(function(){
    let dataNumber = $(this).attr("data-rang"); // 3053
    for (let index = 0; index < dataNumber.length; index++) {
      $(this).append('<span class="data-rang-num="'+ dataNumber.charAt(index) +'"><ul class="js-ran" style="--data-rang-num:'+ `${-dataNumber.charAt(index) * 10}%` +'"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></span>');
    }
  })
}
jsNumberRang();

function scrollPageProgress() {
  $(window).scroll(function(){
    var scrollTop = document.documentElement.scrollTop;
    let progress = $(".scroll-progress");
    if(scrollTop < 50) {
      progress.fadeOut();
    }
    else {
      progress.fadeIn();
    }
    var scrollHeight = document.documentElement.scrollHeight;
    var windowHeight = document.documentElement.clientHeight;
    var maxScrollTop = scrollHeight - windowHeight;
    var scrollTop = document.documentElement.scrollTop;
    var scrollPercentage = (scrollTop / maxScrollTop) * 100;
    $(".scroll-point").css("height", scrollPercentage + "%");
  })
}

$(document).on("click", ".scroll-link", function(){
  $("html, body").animate({
    scrollTop: 0
  }, 800);
  return false;
})

function funMenuToggle() {
  $(".menu-sp-wrapper").html($(".menu").html());
  let jsToggle = $(".toggle")
  window.addEventListener('click', function(e){  
    if (document.querySelector('.toggle') == e.target) {
      console.log("toggle");
      jsToggle.toggleClass("is-open");
      $("body").toggleClass("overflow-hidden is-open-menu");
      $(".menu-sp-wrapper").toggleClass("is-open");
    }
    else {
      if (!document.querySelector('.menu-sp-wrapper').contains(e.target)) {
        if($("body").hasClass("is-open-menu")){
          jsToggle.toggleClass("is-open");
          $("body").toggleClass("overflow-hidden is-open-menu");
          $(".menu-sp-wrapper").toggleClass("is-open");
        }      
      }
    }
  });      
}
funMenuToggle();

if($(window).width() > 1199) {
  scrollPageProgress();
}

$( window ).on( "resize", function() {
  heightBanner();  
});