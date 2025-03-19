import { fizzbuzz } from './fizzbuzz'

describe('FizzBuzz Success case', () => {
  it('ผลลัพธ์์ต้องเป็น 2 เมื่อส่งค่า 2', () => {
    const number = 2
    const expected = '2'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น 3 เมื่อส่งค่า Fizz', () => {
    const number = 3
    const expected = 'Fizz'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น 5 เมื่อส่งค่า Buzz', () => {
    const number = 5
    const expected = 'Buzz'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น 8 เมื่อส่งค่า 8', () => {
    const number = 8
    const expected = '8'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น 9 เมื่อส่งค่า Fizz', () => {
    const number = 9
    const expected = 'Fizz'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น 13 เมื่อส่งค่า 13', () => {
    const number = 13
    const expected = '13'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น 15 เมื่อส่งค่า FizzBuzz', () => {
    const number = 15
    const expected = 'FizzBuzz'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น 25 เมื่อส่งค่า Buzz', () => {
    const number = 25
    const expected = 'Buzz'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น 30 เมื่อส่งค่า FizzBuzz', () => {
    const number = 30
    const expected = 'FizzBuzz'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })
})

describe('FizzBuzz Success case', () => {
  it('ผลลัพธ์์ต้องเป็น Input must have range 1-100 เมื่อส่งค่า 101', () => {
    const number = 101
    const expected = 'Input must have range 1-100'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น Input must have range 1-100 เมื่อส่งค่า 0', () => {
    const number = 0
    const expected = 'Input must have range 1-100'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })

  it('ผลลัพธ์์ต้องเป็น Input must have range 1-100 เมื่อส่งค่า -1', () => {
    const number = -1
    const expected = 'Input must have range 1-100'

    const result = fizzbuzz(number)

    expect(result).toBe(expected)
  })
})
