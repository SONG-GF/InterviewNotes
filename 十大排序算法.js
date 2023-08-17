// 冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 选择排序
function selectionSort(arr) {
  let len = arr.length;
  let minIndex, temp;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// 插入排序
function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// 希尔排序
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 5) {
    //动态定义间隔序列
    gap = gap * 5 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}

// 归并排序
function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) return arr;
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  }
}

// 快排
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];
  for (let num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greater.push(num);
    }
  }
  return [...quickSort(less), equal, ...quickSort(greater)];
}

// 堆排序
function heapSort(arr) {
  const len = arr.length;

  // 构建最大堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }

  // 执行堆排序
  for (let i = len - 1; i > 0; i--) {
    // 将堆顶元素与当前堆的最后一个元素交换
    swap(arr, 0, i);
    // 对交换后的堆顶元素进行堆化
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, heapSize, rootIndex) {
  let largestIndex = rootIndex;
  const leftIndex = 2 * rootIndex + 1;
  const rightIndex = 2 * rootIndex + 2;

  // 在根节点、左子节点和右子节点中找到最大的元素
  if (leftIndex < heapSize && arr[leftIndex] > arr[largestIndex]) {
    largestIndex = leftIndex;
  }

  if (rightIndex < heapSize && arr[rightIndex] > arr[largestIndex]) {
    largestIndex = rightIndex;
  }

  // 如果最大元素不是当前根节点，则交换元素，并继续对交换后的子树进行堆化
  if (largestIndex !== rootIndex) {
    swap(arr, rootIndex, largestIndex);
    heapify(arr, heapSize, largestIndex);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 计数排序
function countingSort(arr) {
  // 找到数组中的最大值和最小值
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // 创建计数数组并初始化为 0
  const countArray = new Array(max - min + 1).fill(0);

  // 计算每个元素的出现次数
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }

  // 根据计数数组重构排序后的数组
  let sortedIndex = 0;
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      arr[sortedIndex] = i + min;
      sortedIndex++;
      countArray[i]--;
    }
  }

  return arr;
}

// 桶排序

// 基数排序
