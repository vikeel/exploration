;(function() {
  var Tab = function(tab) {
    this.tab = tab;
    // 配置默认参数
    this.config = {
      "triggerType": "mouseover",
      // 切换效果
      "effect": "default",
      // 起始索引
      "index": 1,
      "auto": false
    }
  };
  Tab.prototype = {
    var getConfig = function() {
      var config = this.tab.attr("data-config");

    }
  };
  window.Tab = Tab;
})();
