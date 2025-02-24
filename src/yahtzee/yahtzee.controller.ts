import { Request, Response } from 'express'
import YahtzeeService from './yahtzee.service'
import YahtzeeRepository from './yahtzee.repository'

class YahtzeeController {
  private readonly yahtzeeRepository: YahtzeeRepository

  constructor() {
    this.yahtzeeRepository = new YahtzeeRepository()
  }

  async createScore(req: Request, res: Response) {
    try {
      const result = await this.yahtzeeRepository.createScore(req.body)

      return res.status(201).json(result)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}

export default YahtzeeController
