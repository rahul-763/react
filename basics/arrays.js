// Array
const myArr = [0, 1, 2,  3, 4, 5]
// console.log(myArr[1]);

const myArr1 =["Shatiman", "SpiderMan"]
const myArr2 = new Array(1, 2, 3)

// methods

// it adds the elements in the array
// myArr.push(7)
// console.log(myArr);

// it simply removes the last value from the array
// myArr.pop()
// console.log(myArr);

// it inserts the new element in the first index of array
// myArr.unshift(9)

// it removes the element from the first index of array
// myArr.shift()

// it check either that element is present or not in array n return true or false
// console.log(myArr.includes(9));

// to check the value at a particular index
// console.log(myArr.indexOf(3));

// Adds all the elements of an array into a string
// const newArr = myArr.join()
// console.log(newArr);

console.log("A",myArr);
// it returns a copy of a section of an array
const myn1 =myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
const myn2 =myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);