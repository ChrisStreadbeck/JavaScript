const toThePowerOf = (base, power) => {
    const array = Array(power).fill(base);
    const reducer = (total, currentValue) => total * currentValue;
    return array.reduce(reducer);
  }
  
  toThePowerOf(2, 3)
  
  
  //-------------------------
  //Iterative Approach
  
  // function pow(base, power) {
  //     if (power < 0) return 1 / pow(base, -power);
  //     var b = base, result = 1;
  //     while (power > 0) {
  //         if ((power & 1) != 0) {
  //             result *= b;
  //         }
  //         power >>= 1;
  //         b *= b;
  //     }
  //     return result;
  // }
  
  // console.log(pow(2, 6))
  //
  //---------------------------------