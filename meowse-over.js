/*!
 * meowseOver() jQuery plugin
 * Original author: zethussuen
 * github @zethussuen
 * Licensed under MIT License
 */

;(function($) {
  $.fn.meowseOver = function(options){
    var opts = $.extend({}, $.fn.meowseOver.defaults, options);
    var lolcat = 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=lolcat';

    return this.each(function(){
      var me = $(this);
      var meowseTitle = "";
      me.hover(function(e){
        meowseTitle = me.attr('data-title');
        var rand = Math.floor(Math.random()*101);
        var url = lolcat + '[' + rand + ']&imgsz=medium&callback=?';
        var self = this;
        if(meowseTitle.length>0){
          $.getJSON(url, function(data){
            var src = data.responseData.results[0].tbUrl;
            var width = data.responseData.results[0].tbWidth;
            var height = data.responseData.results[0].tbHeight;
            $(self).append('<div class="meow popover" style="height: ' + height + '; width=" ' + width + '"><img src="' + src + '"></img></div>')
          });
        }
      },function(){
        $(".meow").remove();
      });
    });
  };
})(window.jQuery);