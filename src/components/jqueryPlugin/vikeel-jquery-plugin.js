import $ from 'jquery';
  $.fn.pluginName = function(options) {
    var Vikeel = function(el, opts) {
      this.$element = el;
      this.defaults = {
        'color': 'red',
        'fontSize': '16px',
        'textDecoration': 'none'
      };
      this.options = $.extend({}, this.defaults, opts);
    };
    Vikeel.prototype = {
      changecss: function() {
        return this.$element.css({
          'color': this.options.color,
          'fontSize': this.options.fontSize,
          'textDecoration': this.options.textDecoration
        });
      }
    };
    var vikeel = new Vikeel(this, options);
    return vikeel.changecss();
  };

  $('a').PluginName({
    'color': '#3399cc',
    'fontSize': '28px'
  })
