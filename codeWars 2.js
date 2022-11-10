function toWeirdCase(string) {
  let arrWords = string.split(' ')
  let newArr = arrWords.map(item => item.split(''))
  let resArr = newArr.map(item => item.map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('')).join(' ')
  return resArr
}

console.log(toWeirdCase('Array ewewe dfdf htht kjhgjeh'))