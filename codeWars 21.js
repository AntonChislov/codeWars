/* When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata. */


function swap (string) {
  let arr = string.split('')
  let res = []
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'a': res.push('A')
      break
      case 'o': res.push('O')
      break
      case 'u': res.push('U')
      break
      case 'e': res.push('E')
      break
      case 'i': res.push('I')
      break
      default: res.push(arr[i])
    }
  }
  return res.join('')
}

console.log(swap('Hello World'))