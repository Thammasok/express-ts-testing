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
}

export default Yathzee
