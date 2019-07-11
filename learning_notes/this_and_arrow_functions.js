function Invoice(subTotal) {
    this.taxRate = 0.06; // *
    this.subTotal = subTotal;
  
    this.total = setInterval(() => { // **
      console.log((this.taxRate * this.subTotal) + this.subTotal);
      // console.log(this);
    }, 2000);
  }
  
  const inv = new Invoice(200);
  inv.total();
  
  // *"this" forces the variable to look inside the object.  without it
  // javascript looks for the variable outside of the object and can't
  // find it, or will reference something else in program.
  
  // **If you don't have the arrow it treats that function as a new object
  // and the "this" variables are stuck inside of it.  They can't reference
  // the parent object.  Making it an arrow it tells it to pass through.