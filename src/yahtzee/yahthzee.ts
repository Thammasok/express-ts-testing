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
}

export default Yathzee
