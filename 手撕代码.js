// 给定形如 ‘a.b.c.d’ 的字符串，构造一个对象如下: { a:{ b:{ c:{ d:null } } } }
function constructObject(str) {
  const keys = str.split("."); // 将字符串按`.`进行分割得到键的数组
  let obj = {};
  let currentObj = obj;
  keys.forEach((key) => {
    currentObj[key] = {};
    currentObj = currentObj[key];
  });
  currentObj = null; // 最后一个键对应的值设置为null
  return obj;
}

const result = constructObject("a.b.c.d");
console.log(result);

//合并两个有序数组
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0; // 指向arr1的索引
  let j = 0; // 指向arr2的索引

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // 将剩余的元素添加到merged数组中
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray);
