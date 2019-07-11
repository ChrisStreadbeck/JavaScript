var array = [1,2,3,4,5];

function array_popper();
  
  for (var i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      array.pop();
      return array;
    } else: {
      array.shift():
      return array;
    }
  }

array_popper()
console.log(array)
array_popper()
console.log(array)
array_popper()
console.log(array)
array_popper()
console.log(array)

// ------------------------------------------
// What he did:

// class arrayPopper {
// 	constructor(arr) {
// 		this.arr = arr;
// 		this.atBeginning = true;
// 	}

// 	togglePopper() {
// 		this.atBeginning = !this.atBeginning;
// 		return this.atBeginning ? this.arr.pop() : this.arr.shift();
// 	}
// }

// const ap = new ArrayPopper([1,2,3,4,5])

// ap.togglePopper()

// -----------------------------------------
// another way:
// const array = [1,2,3,4,5,6]
// let pointer = "end"

// function arraypopper() {
//   pointer = pointer === "begining" ? "end" : "begining"
//   return pointer === "begining" ? array.shift() : array.pop()
// } 

// console.log(arraypopper())
// console.log(arraypopper())
// console.log(arraypopper())
// console.log(arraypopper())
// console.log(arraypopper())
// console.log(arraypopper())
// console.log(arraypopper())