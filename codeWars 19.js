function isPerfect(n) {
  let arr = [0]
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      arr.push(i)
    }
  }
  let res = arr.reduce((a, b) => a + b)
  return res === n
}

console.log(isPerfect(1))