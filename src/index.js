import ObjectWalker from "../index";
import testObject from "./test/testFile";

let obj = testObject;
function convertToNumber(editedObj, realObject) {
  editedObj.value = Number(editedObj.value);
  return editedObj
}
//   lo

console.log(ObjectWalker.walk(obj[0], convertToNumber, ['name', 'tall']));
