# ObjectWalker

Still building, for manupulating object values, use with care:

```js
const arr = [
  { age: "5" },
  { tweets: "7" },
  { logins: "8" },
  { age: "8" },
  ];


  /**
   * Create a walker function that converts the whole value
   * of each of the object in the array to Number, also return
   * editedObj.original if we added excludes parameter
   *
   **/

  function convertToNumber(editedObj) {
    let objToReturn = {}
    objToReturn[editedObj.key] = Number(editedObj.value)
    return editedObj.original || objToReturn
  }

  // Convert To Number and don't convert
  // any property named age
  let ObjectWalker.walk(arr, convertToNumber, ["age"])
```
