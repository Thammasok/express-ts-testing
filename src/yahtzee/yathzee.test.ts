import Yathzee, { TDices } from './yahthzee'

describe('sumScoreByTarget > กรณีที่สำเร็จ', () => {
  describe('target เป็น 1', () => {
    it('ต้องได้คะแนน 1 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,6] และ target เป็น 1', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 6]
      const target = 1
      const expected = 1

      // Act
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 2', () => {
    it('ต้องได้คะแนน 2 คะแนน เมื่อส่ง dices เป็น [3,4,6,2,1] และ target เป็น 2', () => {
      // Arrange
      const dices: TDices = [3, 4, 6, 2, 1]
      const target = 2
      const expected = 2

      // Act
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 3', () => {
    it('ต้องได้คะแนน 3 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 3', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 5]
      const target = 3
      const expected = 3

      // Act
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 4', () => {
    it('ต้องได้คะแนน 4 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 4', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 5]
      const target = 4
      const expected = 4

      // Act
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 5', () => {
    it('ต้องได้คะแนน 5 คะแนน เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 5', () => {
      // Arrange
      const dices: TDices = [1, 2, 3, 4, 5]
      const target = 5
      const expected = 5

      // Act
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('target เป็น 6', () => {
    it('ต้องได้คะแนน 6 คะแนน เมื่อส่ง dices เป็น [4,3,6,1,2] และ target เป็น 6', () => {
      // Arrange
      const dices: TDices = [4, 3, 6, 1, 2]
      const target = 6
      const expected = 6

      // Act
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
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
      const yathzee = new Yathzee()
      const result = yathzee.sumScoreByTarget(dices, target)

      // Assert
      expect(result).toBe(expected)
    })
  })
})

describe('sumScoreByTarget > กรณีที่ไม่สำเร็จ', () => {
  describe('ตรวจสอบค่า target กรณีที่ส่งค่าไม่ถูกต้อง', () => {
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

