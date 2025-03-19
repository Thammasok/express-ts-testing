export const fizzbuzz = (number: number): string => {
  if (number < 1 || number > 100) {
    return 'Input must have range 1-100'
  }

  const isFizz = number % 3 === 0
  const isBuzz = number % 5 === 0
  
  if (isFizz && isBuzz) return 'FizzBuzz'
  if (isFizz) return 'Fizz'
  if (isBuzz) return 'Buzz'
  
  return number.toString()
}