/*!
 * meowseOver() jQuery plugin
 * Original author: zethussuen
 * github @zethussuen
 * Licensed under MIT License
 */

;(function($) {
  $.fn.meowseOver = function(options){
    var opts = $.extend({}, $.fn.meowseOver.defaults, options);
    
    return this.each(function(){
      var me = $(this);
      var meowseTitle = "";
      me.hover(function(e){
        $(this).css('position', 'relative');
        meowseTitle = me.attr('data-title');
        if(meowseTitle.length>0){
          $(this).append('<div class="meow popover">Meow!</div>');
        }
      },function(){
        me.attr("data-title", meowseTitle);
        $(".meow").remove();
      });
    });
  };
  
  $.fn.meowseOver.defaults = {
    title: null,
    xOffset: 0,
    yOffset: -50,
    delay: 400,
    overrideElementTitle: false
  };
})(window.jQuery);