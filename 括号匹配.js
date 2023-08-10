function isMatch(expression) {
  let stack = [];
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// 有效括号长度
function longestValidParentheses(char) {
  let stack = [-1];
  let maxLength = 0;
  for (let i = 0; i < stack.length; i++) {
    if (s[i] === "(") {
      stack.push(char[i]);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(char[i]);
      } else {
        maxLength = Math.max(maxLength, i - (stack.length - 1));
      }
    }
  }
  return maxLength;
}
