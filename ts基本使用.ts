const turple: [number, string] = [18, "s"];
const people2: {
  age: number;
  name: string;
  sex: number;
} = {
  age: 18,
  name: "sdsd",
  sex: 0,
};

// type
type username = string;
type age = number;
type arr = number[];
type Person = {
  id: string;
  age: number;
  name: string;
  isWebDev: boolean;
};

type Tree<T> = { value: T };
const numbers: arr = [1, 8];

// interface
interface Person1 {
  name: username;
  age: age;
}

type SetPoint = (x: number, y: number) => void;
interface Point {
  x: number;
  y: number;
}
interface Setp {
  x: number;
  y: number;
}
type student = Point & { stuNo: number };

// 索引签名
interface A1 {
  [k: number]: string;
}

const stu: A1 = {
  0: "s",
  1: "asd",
};

interface Animal {
  running: () => void;
}

interface Person5 {
  name: string;
  age: number;
}

interface student1 extends Person5, Animal {
  id: number;
}

const u: student1 = {
  name: "Sd",
  age: 18,
  id: 55,
  running() {},
};

// 接口实现
type Config = {
  url: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  data?: unknown;
  headers?: unknown;
};

function request(
  { url, method, ...arguments }: Config = { url: " ", method: "GET" } as Config
) {}
