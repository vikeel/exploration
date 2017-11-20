import tpl from './home.tpl';
// import './home.css';
import $ from 'jquery';

function HomeCom() {
  var data = {
    name: "home",
    tpl: tpl,
    TextCount: (function() {
      var _bind = function(context) {
        context.input.on('keyup', function() {
          context.render();
        });
      };
      var _getNum = function(context) {
        return context.input.val().length;
      };
      var TextCountFun = function() {};
      TextCountFun.prototype.init = function(config) {
        this.input = $(config.id);
        _bind(this);
        return this;
      };
      TextCountFun.prototype.render = function() {
        // var temp = $('#v-num');
        var num = _getNum(this);
        if($('#v-num').length === 0) {
          this.input.after('<span id="v-num"></span>');
        }
        $('#v-num').html(num + '个字');
      };
      return TextCountFun;
    })()
  };
  return data;
}

export default HomeCom;
