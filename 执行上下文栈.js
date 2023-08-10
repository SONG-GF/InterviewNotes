let a = "hello world";
function first() {
  console.log(1);
  second();
  console.log(2);
}

function second() {
  console.log(3);
}

first();
