// ;(function() {
// 单例
export var single = function(fn) {
  var result;
  return result || (result = fn.apply(this, arguments));
};
// 防抖
export var debounce = (function(fn, delay) {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
})();
// 防止频繁提交
export var proxySynData = (function() {
  var cache = {},
      timer;
  return function(id, cb) {
    if(!timer) {
      timer = setTimeout(function() {
        cb(Object.keys(cache).join());
        cache = {};
        clearTimeout(timer);
        timer = null;
      }, 1000)
    }
    cache[id] = 1;
  }
})();
// 快速排序
export var quickSort = function(arr) {
  if(arr.length <= 1) {return arr;}
  var baseIndex = Math.floor(arr.length/2),
      base = arr.splice(baseIndex, 1)[0],
      left = [],
      right = [];
  for(var i=0; i<arr.length; i++) {
    if(arr[i] < base) {
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([base], quickSort(right));
}
// 有序数组二分查找
export var  binarySearch = function(arr, key) {
  var low = 0,
      high = arr.length - 1;
  while(low <= high) {
    var mid = parseInt((high + low)/2);
    if(key === arr[mid]) {
      return mid;
    }else if(key > arr[mid]) {
      low = mid + 1;
    }else if(key < arr[mid]) {
      high = mid - 1;
    }else {
      return -1;
    }
  }
}
// 数组去重
export var delRepeat = function(arr) {
  var newArr = [],
      obj = {};
  for(var i = 0; i < arr.length; i++) {
    if(!obj[arr[i]]) {
      newArr.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }
  return newArr;
}
// 获取制定长度的随机字符串
export var getRandomStr = function(len) {
  var str = '';
  for(; str.length < len; str += Math.random().toString(36).substr(2));
  return str.substr(0, 30);
}
// 触发/监听
export var Event = (function() {
  var list = {};  // 事件命名空间
  var listen = function(key, fn) {
    if(!list[key]) {
      list[key] = [];  // 如果事件不存在，创建命名空间
    }
    list[key].push(fn);
  };
  var trigger = function() {
    var key = Array.prototype.shift.call(arguments);
    if(!list[key] || list[key].length ===0) {
      return;
    }
    for(var i=0; i<list[key].length; i++) {
      list[key][i].apply(this, arguments)
    }
  };
  var remove = function(key, fn) {
    if(!list[key]) {return;}
    if(!fn) {
      list[key] = [];
    }else {
      for(var i=0; i<list[key].length; i++) {
        if(fn === list[key][i]) {
          list[key].splice(i, 1);
        }
      }
    }
  };
  return {
    listen,
    trigger,
    remove
  }

})()
// 复制对象
export var copyObject = function(orig) {
  var tag = {};
  for(var prop in orig) {
    if(typeof orig[prop] === 'object') {
      tag[prop] = (orig[prop].constructor === Array) ?
                  [] : {};
      copyObject(tag[prop]);
    }else {
      tag[prop] = orig[prop];
    }
  }
  return tag;
}
// 获取一个数组中出现最多的元素和其出现过的位置
export var getMaxAndIndex = function(arr) {
  var obj = {};
  arr.forEach(function(item, index) {
    if(!obj[item]) {
      obj[item] = {indexs: [index]};
    }else {
      obj[item]['indexs'].push(index);
    }
  });
  var num = 0;
  var str = '';
  var reArr;
  for(var prop in obj) {
    var tmp = obj[prop]['indexs'];
    if(tmp.length > num) {
      num = tmp.length;
      str = prop;
      reArr = tmp;
    }
  }
  return {
    maxStr: str,
    indexs: reArr
  }
}
// })()
