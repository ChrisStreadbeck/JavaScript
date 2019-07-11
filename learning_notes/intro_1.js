class Instructor {
    constructor({ name, age, height }) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
  }
  
  const jon = new Instructor({ name: 'Jon Snow', age: 23, height: 6 });
  console.log(jon.name);
  console.log(jon.height);
  console.log(jon.age);
  
  // is the same as
  
  const jonObject = { name: 'Jon Snow', age: 23, height: 6 };
  const jon2 = new Instructor(jonObject) // creates an instance of this instructor
  console.log(jon2.name);
  console.log(jon2.height);
  console.log(jon2.age);
  
  const chris = new Instructor({ name: 'Chris', age: 35, height:6});
  console.log(chris.name);
  console.log(chris.height);
  console.log(chris.age);
  chris.name = "can be overriden"
  console.log(chris.name); // just changes this instance
  console.log(jon2.name) // But doesn't override other instances