// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

const superSum = (x) => {
    return function sum(...args) {
        if (args.length >= x) {
            let res = 0
            for (let i = 0; i < args.length; i++) {
                res += args[i]
            }
            return res
        } else {
            return function (...args2) {
                return sum(...args, ...args2)
            }
        }
    }
}
console.log(superSum(3)(2)(5,3))
// высчитывает не правильно
console.log(superSum(3)(2,5)(3,9))

console.log(superSum(3)(2)(5,3))

console.log(superSum(3)(2)(5,3))