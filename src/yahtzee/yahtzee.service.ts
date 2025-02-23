import Yathzee from './yahthzee'
import YahtzeeRepository from './yahtzee.repository'
import { IScoreInputData } from './model/score.model'

type TDice = 1 | 2 | 3 | 4 | 5 | 6
export type TDices = [TDice, TDice, TDice, TDice, TDice]

class YahtzeeService {
  private readonly yahtzee: Yathzee
  private readonly yahtzeeRepository: YahtzeeRepository

  constructor() {
    this.yahtzeeRepository = new YahtzeeRepository()
    this.yahtzee = new Yathzee()
  }

  async createScore(score: IScoreInputData) {
    try {
      const result = await this.yahtzeeRepository.createScore(score)

      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default YahtzeeService
