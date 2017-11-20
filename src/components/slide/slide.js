import tpl from './slide.tpl';
import './slide.css';
import $ from 'jquery';

function Slide() {
  var imgarr = [];
  $.ajax({
    method: "GET",
    contentType: 'application/json;charset=UTF-8',
    url: '/api',
    async: true
  }).done(function(response) {
    var res = response.result;
    imgarr = res;
  });
  var data = {
    tpl: tpl({
      imgs: imgarr
    })
  };
  var slide = (function() {
    var slideInner = $('.slide-inner');
    var sliderInd = $('.slide-indicators');
    
  })();
  return data;
}

export default Slide;
