const weightedLottery = weights => {
    let containerArray = [];
  
    Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++) {
        containerArray.push(key);
      }
    });
  
    return containerArray[(Math.random() * containerArray.length) | 0];
  };
  
  const weights = {
    green: 1,
    yellow: 2,
    red: 3
  };
  
  weightedLottery(weights);
  
  // This code will add the key (the colors) to the array by the values
  // (the numbers) amount of times.  green once, yellow twice, red thrice.
  //  Aka, for each key in the object of weights add the keys to the array;
  // values times. It goes one by one through the object, pulls the key, sets
  // i to 0, then pushes the key into the array.  It then increments i by 1,
  // checks if i is still less than the key: value (so for green 1 is not < 1)
  // and then moves on to the next key: value pair. 
  
  
  // ---------------------------------------------
  
  // function weightedLottery2(min, max) {
  //   return Math.round(max / (Math.random() * max + min));
  // }
  
  // console.log(weightedLottery2(1, 3))
  
  // ----------------------------------------------
  
  
  