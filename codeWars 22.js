/* Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */


var humanYearsCatYearsDogYears = function(humanYears) {
  if(humanYears === 1) {
      return [1, 15, 15]
  } else if(humanYears === 2) {
      return [2, 24, 24]
  } else if(humanYears === 3) {
      return [3, 28, 29]
  } else {
      return [humanYears, ((humanYears-3) * 4 + 28), ((humanYears-3) * 5 + 29)]
  }
}
