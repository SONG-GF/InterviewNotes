function test(ready) {
  return new Promise((resolve, reject) => {
    if (ready) {
      resolve("hello world");
    } else {
      reject("NO thanks");
    }
  });
}

test(false).then(
  (resolve) => {
    console.log(resolve);
  },
  (reject) => {
    console.log(reject);
  }
);
