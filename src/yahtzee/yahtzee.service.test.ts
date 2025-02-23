import { IScoreInputData, IScoreScheema } from './model/score.model'
import YahtzeeService from './yahtzee.service'
import YahtzeeRepository from './yahtzee.repository'

describe('YahtzeeService', () => {
  it('should be createScore', () => {
    const score: IScoreInputData = {
      player: 'player1',
      game: 'game1',
      ones: 1,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      threeOfAKind: 0,
      fourOfAKind: 0,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 0,
      chance: 0,
      upperTotal: 1,
      lowerTotal: 0,
      grandTotal: 0,
    }

    const yahtzeeRepository = new YahtzeeRepository()
    jest.spyOn(yahtzeeRepository, 'createScore').mockResolvedValue({
      ...score,
      _id: '123456789',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as IScoreScheema)

    const yahtzeeService = new YahtzeeService()
    const result = yahtzeeService.createScore(score)

    expect(result).resolves.toEqual({
      ...score,
      _id: '123456789',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    })
  })
})
