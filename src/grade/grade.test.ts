import { getGrade } from './grade'

describe('getGrade Success Case', () => {
  it('should return A when score is 100', () => {
    // Arrange
    const score = 100
    const expected = 'A'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return A when score is 89', () => {
    // Arrange
    const score = 89
    const expected = 'A'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return A when score is 80', () => {
    // Arrange
    const score = 80
    const expected = 'A'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return B+ when score is 79', () => {
    // Arrange
    const score = 79
    const expected = 'B+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return B+ when score is 78', () => {
    // Arrange
    const score = 78
    const expected = 'B+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return B+ when score is 76', () => {
    // Arrange
    const score = 76
    const expected = 'B+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return B+ when score is 75', () => {
    // Arrange
    const score = 75
    const expected = 'B+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return B when score is 74', () => {
    // Arrange
    const score = 74
    const expected = 'B'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return B when score is 73', () => {
    // Arrange
    const score = 73
    const expected = 'B'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return B when score is 71', () => {
    // Arrange
    const score = 71
    const expected = 'B'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return B when score is 70', () => {
    // Arrange
    const score = 70
    const expected = 'B'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return C+ when score is 69', () => {
    // Arrange
    const score = 69
    const expected = 'C+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return C+ when score is 68', () => {
    // Arrange
    const score = 68
    const expected = 'C+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return C+ when score is 66', () => {
    // Arrange
    const score = 66
    const expected = 'C+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return C+ when score is 65', () => {
    // Arrange
    const score = 65
    const expected = 'C+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return C when score is 64', () => {
    // Arrange
    const score = 64
    const expected = 'C'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return C when score is 63', () => {
    // Arrange
    const score = 63
    const expected = 'C'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return C when score is 61', () => {
    // Arrange
    const score = 61
    const expected = 'C'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return C when score is 60', () => {
    // Arrange
    const score = 60
    const expected = 'C'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return D+ when score is 59', () => {
    // Arrange
    const score = 59
    const expected = 'D+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return D+ when score is 58', () => {
    // Arrange
    const score = 58
    const expected = 'D+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return D+ when score is 56', () => {
    // Arrange
    const score = 56
    const expected = 'D+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return D+ when score is 55', () => {
    // Arrange
    const score = 55
    const expected = 'D+'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return D when score is 54', () => {
    // Arrange
    const score = 54
    const expected = 'D'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return D when score is 53', () => {
    // Arrange
    const score = 53
    const expected = 'D'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return D when score is 51', () => {
    // Arrange
    const score = 51
    const expected = 'D'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return D when score is 50', () => {
    // Arrange
    const score = 50
    const expected = 'D'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return F when score is 48', () => {
    // Arrange
    const score = 48
    const expected = 'F'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return F when score is 49', () => {
    // Arrange
    const score = 49
    const expected = 'F'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return F when score is 1', () => {
    // Arrange
    const score = 1
    const expected = 'F'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('ถ้าคะแนนเป็น 0 จะได้เกรด F', () => {
    // Arrange
    const score = 0
    const expected = 'F'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })
})

describe('getGrade Alterative Case', () => {
  it('should return Invalid Input when score is 101', () => {
    // Arrange
    const score = 101
    const expected = 'Invalid Input'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it('should return Invalid Input when score is -1', () => {
    // Arrange
    const score = -1
    const expected = 'Invalid Input'

    // Act
    const result = getGrade(score)

    // Assert
    expect(result).toBe(expected)
  })

  it("should return Invalid Type when score is 29.99", () => {
    const score = 29.99;
    const expected = "Invalid Type";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });
})
