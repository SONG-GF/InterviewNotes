function Parent() {
  this.name = "Parent";
}

Parent.prototype.parentMethod = function () {
  console.log("Parent Method");
};

function Child() {
  Parent.call(this);
  this.name = "Child";
}

Child.prototype = Object.create(Parent.prototype);
console.log(Child.prototype.constructor, 11);
Child.prototype.constructor = Child;

var child = new Child();
child.parentMethod(); // 输出：Parent Method
