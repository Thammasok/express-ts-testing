type TDice = 1 | 2 | 3 | 4 | 5 | 6
export type TDices = [TDice, TDice, TDice, TDice, TDice]
// if you set type of target, you will not create alternative case
// type TTarget = 1 | 2 | 3 | 4 | 5 | 6

class Yathzee {
  sumScoreByTarget(dices: TDices, target: number): number {
    if (target < 1 || target > 6) {
      throw new Error('Invalid target')
    }

    return dices.filter((dice) => dice === target).length * target
  }

  sumScoreOfKind(dices: TDices, target: 3 | 4): number {
    const counts = new Map<number, number>()

    for (const dice of dices) {
      counts.set(dice, (counts.get(dice) || 0) + 1)
    }

    for (const [, count] of counts) {
      if (count >= target) {
        return dices.reduce((sum, die) => sum + die, 0)
      }
    }

    return 0
  }

  sumScoreOfFullhouse(dices: TDices): number {
    const counts = new Map<number, number>()

    for (const dice of dices) {
      counts.set(dice, (counts.get(dice) || 0) + 1)
    }

    const values = Array.from(counts.values())
    if (values.includes(3) && values.includes(2)) {
      return 25
    }

    return 0
  }

  sumScoreOfStraight(dices: TDices, target: 'small' | 'large'): number {
    const sortedDices = [...new Set(dices)].sort((a, b) => a - b)

    if (target === 'small') {
      // Check for small straight (4 consecutive numbers)
      for (let i = 0; i < sortedDices.length - 3; i++) {
        if (
          sortedDices[i + 1] === sortedDices[i] + 1 &&
          sortedDices[i + 2] === sortedDices[i] + 2 &&
          sortedDices[i + 3] === sortedDices[i] + 3
        ) {
          return 30
        }
      }
    } else if (target === 'large') {
      // Check for large straight (5 consecutive numbers)
      if (sortedDices.length === 5) {
        let isConsecutive = true
        for (let i = 1; i < sortedDices.length; i++) {
          if (sortedDices[i] !== sortedDices[i - 1] + 1) {
            isConsecutive = false
            break
          }
        }
        if (isConsecutive) {
          return 40
        }
      }
    }

    return 0
  }

  sumScoreOfChance(dices: TDices): number {
    return dices.reduce((sum, die) => sum + die, 0)
  }

  sumScoreOfYahtzy(dices: TDices): number {
    let count = 0
    for (let i = 0; i < dices.length; i++) {
      if (dices[0] === dices[i]) {
        count++
      }
    }

    return count === 5 ? 50 : 0
  }
}

export default Yathzee
