function Dictionary() {
  var items = {};

  this.has = function (key) {
    return items.hasOwnProperty(key);
  };

  this.set = function (key, value) {
    items[key] = value;
  };

  this.delete = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  this.values = function () {
    return Object.keys(items).map(key => items[key]);
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  // 纯粹为了验证items
  this.getItems = function () {
    return items;
  };
}
