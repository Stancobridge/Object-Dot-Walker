/**
 * @status - Beta
 * @description - This is a little package that seems needed in a project am working on
 * it can be used by anyone. Note it is not Tested to any level an can have bugs.
 */

class ObjectWalker {
  constructor(items, cb, excludes) {
    this.items = items;
    this.cb = cb;
    this.excludes = excludes;
    this._perfomLoop = this._perfomLoop.bind(this)
  }

  // callback has to return original item if excludes is passed
  // if excludes is passed: callback should return param.original || modified param 
  static walk(items, cb, excludes = []) {
    const singleton = new this(items, cb, excludes);
    //
    return singleton._walk();
  }

  _walk() {
    if (
      Array.isArray(this.items) &&
      typeof this.items[0] === "object" &&
      this.items[0] !== null
    ) {
      // item is an array with object
      // Perform walk
      return this.items.map.call(this.items.map(this._perfomLoop), this.cb);
    } else {
      this.items = [];
    }
  }

  _perfomLoop(item, i, allArr) {
    {
      // exclude some keys
      let key = Object.keys(item)[0];
      let value = item[key];
      if (this.excludes && this.excludes.includes(key)) {
        return {original: item}
      } else return { key, value };
    }
  }
}


export default ObjectWalker;