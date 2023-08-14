function flattenArray(arrs, dep) {
  let res = [];
  let len = arrs.length;
  for (let i = 0; i < len; i++) {
    if (Array.isArray(arrs[i]) && dep > 0) {
      res = res.concat(flattenArray(arrs[i], dep - 1));
    } else {
      res.push(arrs[i]);
    }
  }
  return res;
}

arrs = [1, 2, [3], [[[[6]]]]];
console.log(flattenArray(arrs, 2));
