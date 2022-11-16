function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let total = marks.reduce((a, b) => a + b)
  let res = Math.round(total / marks.length)
  return res
}

console.log(getAverage([11,9,9,13,9,8,15,13,8,19,2,7,9,10,18,15]))
