/*
 * 继承类
 *
**/
var Class = (function() {
  var _mix = function(r, s) {
    for(var p in s) {
      if(s.hasOwnProperty(p)) {
        r[p] = s[p];
      }
    }
  }
  var _extend = function() {
    this.initPrototype = true;
    var prototype = new this();
    this.initPrototype = false;

    var items = Array.prototype.slice.call(arguments) || [];
    var item;

    // 支持混入多个属性，并且支持{}和Function
    while(item = items.shift()) {
      _mix(prototype, item.prototype || item);
    }

    // 返回子类
    function SubClass() {
      if(!SubClass.initPrototype && this.init) {
        // 调用init真正的构造函数
        this.init.apply(this, arguments);
      }
    }

    // 赋值原型链，完成继承
    SubClass.prototype = prototype;
    SubClass.prototype.constructor = SubClass;
    // 为子类添加extend方法
    SubClass.extend = _extend;

    return SubClass;
  }
  // 超级父类
  var Class = function() {};
  // 为超级父类添加extend方法
  Class.extend = _extend;

  return Class;
})()

export default Class
