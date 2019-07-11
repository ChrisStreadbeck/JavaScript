const arrayAverage = arr => arr.reduce((a,b) => a + b, 0) / arr.length

arrayAverage([1,2,3,4,5,6,7,8,9])

//------------------------------------------------------------------------

const getAverage = array => {
    const reducer = (total, currentValue) => total + currentValue
    const sum = array.reduce(reducer);
    return sum / array.length;
  }
  
  getAverage([1,2,3,4,5,6,7,8,9]);