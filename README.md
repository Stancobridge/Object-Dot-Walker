# ObjectWalker

Still building, for manupulating object values, use with care:

```js
const obj = {
   age: "5" ,
   tweets: "7",
   logins: "8" ,
   age: "8" 
   };


  /**
   * Create a walker function that converts the whole value
   * of each of the object in the array to Number except age
   *
   **/

function convertToNumber(editedObj, realObject) {
  editedObj.value = Number(editedObj.value);
  return editedObj
}
  // Convert To Number and don't convert
  // any property named age
  let newObj = ObjectWalker.walk(obj, convertToNumber, ["age"])
```
