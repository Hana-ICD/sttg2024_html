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
  $(".menu-sp-wrapper").html("<div class='menu-item-frame'>" + $(".menu").html() + "</div>");
  let jsToggle = $(".toggle")
  window.addEventListener('click', function(e){  
    if (document.querySelector('.toggle') === e.target) {
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

// text transform
$(".text-dynamic").each(function(){
  let _this=$(this), count = 0, i=0;
  let wordsArray = _this.attr("data-content-dynamic").split(', ');
  let tam="";
  setInterval(function () { 
    _this.removeClass("show");
    count++;
    tam=""; i=0.1;

    let ar = wordsArray[count % wordsArray.length].split("");
    ar.forEach(element => {
      i=i+0.04;  
      tam += "<span style='transition-delay:"+ i +"s;'>" + element + "</span>";
    });
    _this.html(tam);
    
    setTimeout(function() { 
      _this.addClass("show");
    }, 10);
  }, 5000);
})


$(".text-dynamic-block").each(function(){
  let _this = $(this), count = 0, i=0;
  let wordsArray = _this.attr("data-content-dynamic").split(', ');
  let tam="";
  setInterval(function () { 
    _this.removeClass("show");
    _this.removeClass("out");
    count++;
    tam=""; i=0.1;
    let ar = wordsArray[count % wordsArray.length].split("");
    ar.forEach(element => {
      i=i+0.05;  
      tam += "<span style='transition-delay:"+ i +"s;'>" + element + "</span>";
    });
    
    _this.html(tam);
    
    setTimeout(function() { 
      _this.addClass("show");
    }, 20);

    setTimeout(function() { 
      _this.addClass("out"); 
    }, 4500)
  }, 5000);
})

// tabs
var checkParamUrl = true;
function funTabContent() {
  $(document).on("click",'[data="tab-nav"]', function(){
    checkParamUrl = false;
    let _this = $(this);  
    let attrTab = _this.attr("data-tab");
    let tabContent = _this.parents(".group-tabs").find(".tab-content");
    const listNav = tabContent.find($("."+attrTab));
    let j=0, h=0;
  
    _this.parent().find('[data="tab-nav"]').removeClass("active");
    _this.addClass("active");
  
    if(attrTab != "all") {   
      $('[data="tab-content-item"]').css({"position": "relative", "opacity":"0"});
  
      tabContent.css("height", (Math.ceil(listNav.length / 3) * 420) + "px");
      tabContent.css({"margin-left":"-15px", "margin-right":"-15px"});
  
      for (let index = 0; index < listNav.length; index++) {     
        if(index == 3) {
          j = 0;
        } 
        if(index != 0 && index % 3 == 0) {
          h++;
        } 
        listNav[index].style = "position: absolute; top: "+h * 400 + "px" + "; left: "+j * 33.33+"%;";
        j++;
      }
    }
    else {
      $('[data="tab-content-item"]').css({"position":"relative", "top":"0", "left":"0", "opacity":"1"});
      tabContent.css({"height":"auto", "margin-left":"0", "margin-right":"0"});
    }  
  })
}
funTabContent();

function funGetParamUrl() {
  const urlCurrent = window.location.href;
  const urlHref = urlCurrent.split("#");
  const urlHrefValue = urlHref[urlHref.length - 1]

  if(urlHref.length > 1) {

    $("html, body").animate({ scrollTop: document.getElementsByName('group-tabs')[0].offsetTop - ($("header .nav-head").outerHeight() + $(".group-tabs .tab-nav").outerHeight()) }, 800);

    if(checkParamUrl && urlHrefValue != "all") {
      $('[data="tab-nav"]').removeClass("active");
      $('[data-tab="'+urlHrefValue+'"]').addClass("active");

      $('[data="tab-content-item"]').css({"position": "relative", "opacity":"0"});
      let tabContent = $(".tab-content");
      const listNav = tabContent.find($("."+urlHrefValue));
      let j=0, h=0;

      tabContent.css("height", (Math.ceil(listNav.length / 3) * 420) + "px");
      tabContent.css({"margin-left":"-15px", "margin-right":"-15px"});
  
      for (let index = 0; index < listNav.length; index++) {     
        if(index == 3) {
          j = 0;
        } 
        if(index != 0 && index % 3 == 0) {
          h++;
        } 
        listNav[index].style = "position: absolute; top: "+h * 400 + "px" + "; left: "+j * 33.33+"%;";
        j++;
      }
    }
  }
}
funGetParamUrl();