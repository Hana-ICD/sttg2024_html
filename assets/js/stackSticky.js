stackAnimation();
// var stackLastScroll = 0;
function stackAnimation() {
  windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  $(".block-stack").each(function () {
    if ($(window).width() > 1199) {
      var _this = $(this);
      var stackItems = _this.find(".stack-item");
      if (stackItems.length) {
        // if (windowScrollTop > stackLastScroll) {
        //   _this.addClass("forward");
        //   _this.removeClass("reverse");
        // } else {
        //   _this.removeClass("forward");
        //   _this.addClass("reverse");
        // }
        for (let i = 0; i < stackItems.length - 1; i++) {
          var stackBoxHeight = (_this.height() / _this.find(".stack-item").length) * i;
          var stackTopPosition = _this.offset().top;

          // console.log(windowScrollTop, "windowScrollTop");
          // console.log(stackTopPosition, "stackTopPosition");
          // console.log(stackBoxHeight, "stackBoxHeight");

          if (windowScrollTop - stackTopPosition > stackBoxHeight) {
            var yMove = windowScrollTop - stackTopPosition - stackBoxHeight;
            if (yMove > _this.outerHeight()) {
              yMove = _this.outerHeight();
            }
            // console.log(yMove, "yMove");
            $(stackItems[i]).css({ height: "calc(100vh - " + yMove + "px)" });
            $(stackItems[i]).addClass("active");
          } else {
            $(stackItems[i]).css({ height: "calc(100vh - 0px)" });
            $(stackItems[i]).removeClass("active");
          }
        }
      }
    } else {
      $(".block-stack .stack-item").css({ height: "auto" });
    }
  });
  // stackLastScroll = windowScrollTop;
}
$(window).scroll(function () {
  stackAnimation();
});