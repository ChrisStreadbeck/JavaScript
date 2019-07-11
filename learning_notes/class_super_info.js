class Fish {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
  }
  
  class Clownfish extends Fish {
    constructor(weight, ...params) {
      super(...params)
      this.weight = weight
    }
  }
  
  bob = new Fish("Bob", 20)
  console.log(bob.name)
  
  steve = new Clownfish(100, "Steve", 20)
  
  // You add super(...params) to the class in order for it to pass
  // through the elements of the parent Class.  In this case it's
  // adding name and age from class Fish.