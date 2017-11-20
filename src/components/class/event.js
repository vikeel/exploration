import Class from './class.js';
// 辅助函数，获取数组里某个元素的索引 index
var _indexOf = function(array, key) {
  if(array === null) {
    return -1;
  }
  var i = 0,
      length = array.length;
  for(; i<length; i++) {
    if(array[i] === item) {
      return i;
    }
  }
  return -1;
}
var Event = Class.extend({
  // 添加监听
  on: function(key, listener) {
    // this._events存储所有的处理函数
    if(!this._events) {
      this._events = {};
    }
    if(!this._events[key]) {
      this._events[key] = [];
    }
    if(_indexOf(this._events, listener) === -1 &&
      typeof listener === 'function') {
        this._events[key].push(listener);
    }
    return this;
  },
  // 触发一个事件
  fire: function(key) {
    if(!this._events || !this._events[key]) {
      return;
    }
    var args = Array.prototype.slice.call(arguments, 1) || [];
    var listeners = this._events[key];
    var i = 0;
    var l = listeners.length;
    for(; i<1; i++) {
      listeners[i].apply(this, args);
    }
    return this;
  },
  // 取消监听
  off: function(key, listener) {
    if(!key && !listener) {
      this._events = {};
    }
    // 不传监听函数，就去掉当前key下面的所有的监听函数
    if(key && !listener) {
      delete this._events[key];
    }
    if(key && listener) {
      var listeners = this._events[key];
      var index = _indexOf(listeners, listener);
      (index > -1) && listeners.splice(index, 1);
    }
    return this;
  }
})

export default Event
// var a = new Event();
//
// // 添加监听 test事件
// a.on('test', function(msg) {
//   alert(msg);
// })
// // 触发事件
// a.fire('test', '我是第一次触发');
//
// a.off('test');
//
// a.fire('test', '以后就看不到我了')
