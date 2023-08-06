class EventEmiter {
  constructor() {
    this._events = {};
  }
  on(eventName, callback) {
    if (!this._events) {
      this._events = {};
    }
    this._events[eventName] = [...(this._events[eventName] || []), callback];
  }
  emit(eventName, ...args) {
    if (!this._events[eventName]) return;
    this._events[eventName].forEach((fn) => fn(...args));
  }
  off(eventName, cb) {
    if (!this._events[eventName]) return;
    this._events[eventName] = this._events[eventName].filter(
      (fn) => fn !== cb && fn.l != cb
    );
  }
  once(eventName, callback) {
    const one = (...args) => {
      callback(...args);
      this.off(eventName, one);
    };
    one.l = callback;
    this.on(eventName, one);
  }
}

let event = new EventEmiter();

let login1 = function (...args) {
  console.log("login success1", args);
};
let login2 = function (...args) {
  console.log("login success2", args);
};
// event.on('login',login1)
event.once("login", login2);
event.off("login", login1); // 解除订阅
event.emit("login", 1, 2, 3, 4, 5);
event.emit("login", 6, 7, 8, 9);
event.emit("login", 10, 11, 12);

// 观察者模式
class Subject {
  constructor() {
    this.state = "happy";
    this.observes = [];
  }
  attach(o) {
    this.observes.push(o);
  }
  setState(newState) {
    this.state = newState;
    this.observes.forEach((o) => o.update(this));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(student) {
    console.log(
      "当前" + this.name + "被通知了",
      "当前学生的状态是" + student.state
    );
  }
}

let student = new Subject("学生");
let parent = new Observer("父母");
let teacher = new Observer("老师");

// 被观察者存储观察者的前提，需要先接纳观察者
student.attach(parent);
student.attach(teacher);
student.setState("被欺负了");

// 单例模式
function proxy(func) {
  let instance;
  let handle = {
    constructor(target, args) {
      if (!instance) {
        instance = Reflect.construct(func, args);
      }
      return instance;
    },
  };
  return new Proxy(func, handle);
}
