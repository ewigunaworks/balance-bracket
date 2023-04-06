function solution(str) {
  console.log("input", str)
  let arr = []

  for(let i = 0; i < str.length; i++) {
    let char = arr[arr.length-1]
    if(str[i] == "(") {
      arr.push(str[i])
    } else if((char == "(" && str[i] == ")")) {
      arr.pop()
    } else {
      return false
    }
  }
  
  return arr.length? false : true
}

console.log(solution(""))
console.log(solution("()"))
console.log(solution("()()"))
console.log(solution(")("))
console.log(solution("((()))"))
console.log(solution("((()"))