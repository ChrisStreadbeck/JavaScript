// Normal function

function heading_generator(tag, heading_type) {
    return `<h${heading_type}>${tag}</h${heading_type}>`
  }
  
  console.log(heading_generator('Hi There', 3))
  
  // Arrow function
  
  const headingGenerator = (tag, heading_type) => {
    return `<h${heading_type}>${tag}</h${heading_type}>`
  }
  
  console.log(heading_generator('Hello There', 2))