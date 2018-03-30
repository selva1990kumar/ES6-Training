//ES5 Function inside object
//30032018

let es5Object = {
  myMethod: function(x, y) {
    console.log("inside myMethod function ES5");
  }
};
const es6Object = {
  myMethod(x, y) {
    console.log("inside myMethod function ES6");
  }
};
const es6SetGet = {
  get foo() {
    console.log("GET foo");
    return 123;
  },
  set bar(value) {
    console.log("SET bar to " + value);
  }
};
