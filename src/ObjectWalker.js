/**
 * @status - Beta
 * @description - This is a little package that seems needed in a project am working on
 * it can be used by anyone. Note it is not Tested to any level an can have bugs.
 */

class ObjectWalker {
  constructor(items, cb, excludes) {
    this.items = items;
    this.cb = cb;
    this.excludes = excludes ?? [];
    this._perfomLoop = this._perfomLoop.bind(this);
  }

  // callback has to return original item if excludes is passed
  // if excludes is passed: callback should return param.original || modified param
  static walk(items, cb, excludes = []) {
    const singleton = new this(items, cb, excludes);
    //
    return singleton._walk();
  }

  _walk() {
    if (typeof this.items === "object" && this.items !== null) {
      // item is an array with object
      // Perform walk
      return this._perfomLoop(this.items);
    } else {
      this.items = [];
    }
  }

  _perfomLoop(items) {
    //
    if (!this.cb) return items;
    for (const key in items) {
      // Item key is excluded
      if (this.excludes.includes(key)) {
        items = { ...items, [key]: items[key] };
      } else {
        // Return both the key value object and current item
        // let { value } = editedObject;
        const { value } = this.cb(
          {
            key,
            value: items[key],
          },
          { [key]: items[key] }
        );
        items = {
          ...items,
          [key]: value,
        };
      }
    }

    return items;
  }
}

export default ObjectWalker;
