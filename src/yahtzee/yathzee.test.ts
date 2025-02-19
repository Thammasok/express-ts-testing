import Yathzee, { TDices } from './yahthzee'

describe('sumScoreByTarget > กรณีที่สำเร็จ', () => {
  describe('target เป็น 1', () => {
    let yathzee: Yathzee

    beforeEach(() => {
      yathzee = new Yathzee()
    })

    it('ต้องได้คะแนน 1 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,6] และ target เป็น 1', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 6]
      const target = 1
      const expected = 1

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 3 คะแนน เมื่อส่ง dices เป็น [2,1,4,1,1] และ target เป็น 1', () => {
      // Arrange
      const dices: TDices = [2, 1, 4, 1, 1]
      const target = 1
      const expected = 3

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [2,5,2,3,4] และ target เป็น 1', () => {
      // Arrange
      const dices: TDices = [2, 5, 2, 3, 4]
      const target = 1
      const expected = 0

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 2', () => {
    let yathzee: Yathzee

    beforeEach(() => {
      yathzee = new Yathzee()
    })

    it('ต้องได้คะแนน 2 คะแนน เมื่อส่ง dices เป็น [3,4,6,2,1] และ target เป็น 2', () => {
      // Arrange
      const dices: TDices = [3, 4, 6, 2, 1]
      const target = 2
      const expected = 2

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
    it('ต้องได้คะแนน 6 คะแนน เมื่อส่ง dices เป็น [3,4,6,2,1] และ target เป็น 2', () => {
      // Arrange
      const dices: TDices = [2, 5, 2, 6, 2]
      const target = 2
      const expected = 6

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [3,5,6,1,1] และ target เป็น 2', () => {
      // Arrange
      const dices: TDices = [3, 5, 6, 1, 1]
      const target = 2
      const expected = 0

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 3', () => {
    let yathzee: Yathzee

    beforeEach(() => {
      yathzee = new Yathzee()
    })

    it('ต้องได้คะแนน 3 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 3', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 5]
      const target = 3
      const expected = 3

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
    it('ต้องได้คะแนน 12 คะแนน เมื่อส่ง dices เป็น [3,3,4,3,3] และ target เป็น 3', () => {
      // Arrange
      const dices: TDices = [3, 3, 4, 3, 3]
      const target = 3
      const expected = 12

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [1,4,5,6,2] และ target เป็น 3', () => {
      // Arrange
      const dices: TDices = [1, 4, 5, 6, 2]
      const target = 3
      const expected = 0

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 4', () => {
    let yathzee: Yathzee

    beforeEach(() => {
      yathzee = new Yathzee()
    })

    it('ต้องได้คะแนน 4 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 4', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 5]
      const target = 4
      const expected = 4

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 8 คะแนน เมื่อส่ง dices เป็น [5,2,4,4,5] และ target เป็น 4', () => {
      // Arrange
      const dices: TDices = [5, 2, 4, 4, 5]
      const target = 4
      const expected = 8

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [6,1,3,6,5] และ target เป็น 4', () => {
      // Arrange
      const dices: TDices = [6, 1, 3, 6, 5]
      const target = 4
      const expected = 0

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 5', () => {
    let yathzee: Yathzee

    beforeEach(() => {
      yathzee = new Yathzee()
    })

    it('ต้องได้คะแนน 5 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 5', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 5]
      const target = 5
      const expected = 5

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 15 คะแนน เมื่อส่ง dices เป็น [5,2,3,5,5] และ target เป็น 5', () => {
      // Arrange
      const dices: TDices = [5, 2, 3, 5, 5]
      const target = 5
      const expected = 15

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,4] และ target เป็น 5', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 4]
      const target = 5
      const expected = 0

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 6', () => {
    let yathzee: Yathzee

    beforeEach(() => {
      yathzee = new Yathzee()
    })

    it('ต้องได้คะแนน 6 คะแนน เมื่อส่ง dices เป็น [4,3,6,1,2] และ target เป็น 6', () => {
      // Arrange
      const dices: TDices = [4, 3, 6, 1, 2]
      const target = 6
      const expected = 6

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 30 คะแนน เมื่อส่ง dices เป็น [6,6,6,6,6] และ target เป็น 6', () => {
      // Arrange
      const dices: TDices = [6, 6, 6, 6, 6]
      const target = 6
      const expected = 30

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [4,4,5,5,3] และ target เป็น 6', () => {
      // Arrange
      const dices: TDices = [4, 4, 5, 5, 3]
      const target = 6
      const expected = 0

      // Act
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })
})

describe('sumScoreByTarget > กรณีที่ไม่สำเร็จ', () => {
  describe('ตรวจสอบค่า target กรณีที่ส่งค่าไม่ถูกต้อง', () => {
    let yahthzee: Yathzee
    beforeEach(() => {
      yahthzee = new Yathzee()
    })

    it('ต้องได้ข้อความ Invalid target เมื่อส่ง target เป็น 0', () => {
      // Arrange
      const dices: TDices = [1, 1, 1, 1, 1]
      const target = 0
      const expected = 'Invalid target'

      // Act
      const yathzee = new Yathzee()

      // Assert
      expect(() => yathzee.sumScoreByTarget(dices, target)).toThrow(expected)
    })

    it('ต้องได้ข้อความ Invalid target เมื่อส่ง target เป็น -1', () => {
      // Arrange
      const dices: TDices = [1, 1, 1, 1, 1]
      const target = -1
      const expected = 'Invalid target'

      // Act
      const yathzee = new Yathzee()

      // Assert
      expect(() => yathzee.sumScoreByTarget(dices, target)).toThrow(expected)
    })

    it('ต้องได้ข้อความ Invalid target เมื่อส่ง target เป็น -1', () => {
      // Arrange
      const dices: TDices = [2, 2, 2, 2, 2]
      const target = 7
      const expected = 'Invalid target'

      // Act
      const yathzee = new Yathzee()

      // Assert
      expect(() => yathzee.sumScoreByTarget(dices, target)).toThrow(expected)
    })
  })
})

describe('sumScoreOfKind > กรณีที่สำเร็จ', () => {
  describe('three of a kind', () => {
    let yathzee: Yathzee

    beforeEach(() => {
      yathzee = new Yathzee()
    })

    it('ต้องได้คะแนน 8 คะแนน เมื่อส่ง dices เป็น [2,1,2,1,2] ของ three of a kind', () => {
      // Arrange
      const dices: TDices = [2, 1, 2, 1, 2]
      const target = 3
      const expected = 8

      // Act
      const result = yathzee.sumScoreOfKind(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 8 คะแนน เมื่อส่ง dices เป็น [1,1,2,2,2] ของ three of a kind', () => {
      // Arrange
      const dices: TDices = [1, 1, 2, 2, 2]
      const target = 3
      const expected = 8

      // Act
      const result = yathzee.sumScoreOfKind(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('four of a kind', () => {
    let yathzee: Yathzee

    beforeEach(() => {
      yathzee = new Yathzee()
    })

    it('ต้องได้คะแนน 17 คะแนน เมื่อส่ง dices เป็น [4,4,4,4,1] ของ four of a kind', () => {
      // Arrange
      const dices: TDices = [4, 4, 4, 4, 1]
      const target = 4
      const expected = 17

      // Act
      const result = yathzee.sumScoreOfKind(dices, target)

      // Assert
      expect(result).toBe(expected)
    })

    it('ต้องได้คะแนน 17 คะแนน เมื่อส่ง dices เป็น [4,4,1,4,4] ของ four of a kind', () => {
      // Arrange
      const dices: TDices = [4, 4, 1, 4, 4]
      const target = 4
      const expected = 17

      // Act
      const result = yathzee.sumScoreOfKind(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })
})

describe('sumScoreOfFullhouse > กรณีที่สำเร็จ', () => {
  let yathzee: Yathzee

  beforeEach(() => {
    yathzee = new Yathzee()
  })

  it('ต้องได้คะแนน 25 คะแนน เมื่อส่ง dices เป็น [2,2,3,3,3]', () => {
    // Arrange
    const dices: TDices = [2, 2, 3, 3, 3]
    const expected = 25

    // Act
    const result = yathzee.sumScoreOfFullhouse(dices)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 25 คะแนน เมื่อส่ง dices เป็น [2,3,3,3,2]', () => {
    // Arrange
    const dices: TDices = [2, 3, 3, 3, 2]
    const expected = 25

    // Act
    const result = yathzee.sumScoreOfFullhouse(dices)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 25 คะแนน เมื่อส่ง dices เป็น [3,2,3,2,3]', () => {
    // Arrange
    const dices: TDices = [3, 2, 3, 2, 3]
    const expected = 25

    // Act
    const result = yathzee.sumScoreOfFullhouse(dices)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [3,2,3,1,3]', () => {
    // Arrange
    const dices: TDices = [3, 2, 3, 1, 3]
    const expected = 0

    // Act
    const result = yathzee.sumScoreOfFullhouse(dices)

    // Assert
    expect(result).toBe(expected)
  })
})

describe('sumScoreOfStraight > กรณีที่สำเร็จ', () => {
  let yathzee: Yathzee

  beforeEach(() => {
    yathzee = new Yathzee()
  })

  it('ต้องได้คะแนน 30 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,6] และ target เป็น small', () => {
    // Arrange
    const dices: TDices = [1, 2, 3, 4, 6]
    const target = 'small'
    const expected = 30

    // Act
    const result = yathzee.sumScoreOfStraight(dices, target)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 30 คะแนน เมื่อส่ง dices เป็น [3,2,4,4,5] และ target เป็น small', () => {
    // Arrange
    const dices: TDices = [3, 2, 4, 4, 5]
    const target = 'small'
    const expected = 30

    // Act
    const result = yathzee.sumScoreOfStraight(dices, target)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 30 คะแนน เมื่อส่ง dices เป็น [3,6,4,1,5] และ target เป็น small', () => {
    // Arrange
    const dices: TDices = [3, 6, 4, 1, 5]
    const target = 'small'
    const expected = 30

    // Act
    const result = yathzee.sumScoreOfStraight(dices, target)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [1,2,3,5,6] และ target เป็น small', () => {
    // Arrange
    const dices: TDices = [1, 2, 3, 5, 6]
    const target = 'small'
    const expected = 0

    // Act
    const result = yathzee.sumScoreOfStraight(dices, target)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 40 คะแนน เมื่อส่ง dices เป็น [2,3,4,5,6] และ target เป็น large', () => {
    // Arrange
    const dices: TDices = [2, 3, 4, 5, 6]
    const target = 'large'
    const expected = 40

    // Act
    const result = yathzee.sumScoreOfStraight(dices, target)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 40 คะแนน เมื่อส่ง dices เป็น [1,4,3,2,5] และ target เป็น large', () => {
    // Arrange
    const dices: TDices = [1, 4, 3, 2, 5]
    const target = 'large'
    const expected = 40

    // Act
    const result = yathzee.sumScoreOfStraight(dices, target)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [2,3,1,5,6] และ target เป็น large', () => {
    // Arrange
    const dices: TDices = [2, 3, 1, 5, 6]
    const target = 'large'
    const expected = 0

    // Act
    const result = yathzee.sumScoreOfStraight(dices, target)

    // Assert
    expect(result).toBe(expected)
  })
})

describe('sumScoreOfChance > กรณีที่สำเร็จ', () => {
  let yathzee: Yathzee

  beforeEach(() => {
    yathzee = new Yathzee()
  })

  it('ต้องได้คะแนน 13 คะแนน เมื่อส่ง dices เป็น [2,2,3,3,3]', () => {
    // Arrange
    const dices: TDices = [2, 2, 3, 3, 3]
    const expected = 13

    // Act
    const result = yathzee.sumScoreOfChance(dices)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 15 คะแนน เมื่อส่ง dices เป็น [2,1,3,4,5]', () => {
    // Arrange
    const dices: TDices = [2, 1, 3, 4, 5]
    const expected = 15

    // Act
    const result = yathzee.sumScoreOfChance(dices)

    // Assert
    expect(result).toBe(expected)
  })
})

describe('sumScoreOfYahtzy > กรณีที่สำเร็จ', () => {
  let yathzee: Yathzee

  beforeEach(() => {
    yathzee = new Yathzee()
  })

  it('ต้องได้คะแนน 50 คะแนน เมื่อส่ง dices เป็น [3,3,3,3,3]', () => {
    // Arrange
    const dices: TDices = [3, 3, 3, 3, 3]
    const expected = 50

    // Act
    const result = yathzee.sumScoreOfYahtzy(dices)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 50 คะแนน เมื่อส่ง dices เป็น [6,6,6,6,6]', () => {
    // Arrange
    const dices: TDices = [6, 6, 6, 6, 6]
    const expected = 50

    // Act
    const result = yathzee.sumScoreOfYahtzy(dices)

    // Assert
    expect(result).toBe(expected)
  })

  it('ต้องได้คะแนน 0 คะแนน เมื่อส่ง dices เป็น [6,6,1,6,6]', () => {
    // Arrange
    const dices: TDices = [6, 6, 1, 6, 6]
    const expected = 0

    // Act
    const result = yathzee.sumScoreOfYahtzy(dices)

    // Assert
    expect(result).toBe(expected)
  })
})
