function problem(x){
  //your code here
  if (Number.isFinite(x)) {
    return x * 50 + 6
  } else {
    return 'Error'
  }
}

console.log(problem(3))