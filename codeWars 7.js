// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let res = x.toLowerCase().split('').reverse().join('')
  return res === x.toLowerCase()
}

console.log(isPalindrome('Asa'))