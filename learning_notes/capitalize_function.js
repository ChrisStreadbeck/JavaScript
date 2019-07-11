const shortStr = "hi there";
const longStr = "the quick brown fox jumps over the lazy dog";

const toCapital = str => {
  const words = str.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");  
  };

console.log(toCapital(shortStr))
console.log(toCapital(longStr))