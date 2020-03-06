const statusResults = {
    UNDEFINED: 'undefined ',
    NULL: 'null',
    NOT_ARRAY: 'not an array ',
    EMPTY: 'empty array',
    NAN: 'not a number',
    OK: 'ok',
  }
  
class ArrayCheck {  
    constructor(array) {
      this.array = array;
      this.status = statusResults.OK;
      if (this.array === undefined) 
        this.status =  statusResults.UNDEFINED;
      else if (this.array === null) 
        this.status =  statusResults.NULL;
      else if (!Array.isArray(this.array))
        this.status =  statusResults.NOT_ARRAY;
      else if (this.array.length < 1)
        this.status =  statusResults.EMPTY;      
    }
  };

class NumberCheck {  
    constructor(v) {
      this.v = v;
      this.status = statusResults.OK;
      if (this.v === undefined)
        this.status =  statusResults.UNDEFINED;
      else if (this.v === null) 
        this.status =  statusResults.NULL;
      else if (isNaN(this.v))
        this.status =  statusResults.NAN;
    }
  };

  class StringCheck {  
    constructor(v) {
      this.v = v;
      this.status = statusResults.OK;
      if (this.v === undefined)
        this.status =  statusResults.UNDEFINED;
      else if (this.v === null) 
        this.status =  statusResults.NULL;
    }
  };

  module.exports = {
    ArrayCheck, NumberCheck, statusResults, StringCheck
}

