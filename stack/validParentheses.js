const openParentheses = ["(", "[", "{", "<"];
const closedParentheses = [")", "]", "}", ">"];

var isValid = function (s) {
  let stack = [];
  for (const character of s) {
    if (openParentheses.includes(character)) {
      stack.push(character);
    } else if (closedParentheses.includes(character)) {
      switch (character) {
        case ")":
          if (stack.pop() != "(") {
            return false;
          }
          break;
        case "]":
          if (stack.pop() != "[") {
            return false;
          }
          break;
        case "}":
          if (stack.pop() != "{") {
            return false;
          }
          break;
        case ">":
          if (stack.pop() != "<") {
            return false;
          }
          break;

        default:
          break;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid("()"));
