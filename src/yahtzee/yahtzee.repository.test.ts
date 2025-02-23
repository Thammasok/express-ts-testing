import Score, { IScoreInputData, IScoreScheema } from './model/score.model'
import YahtzeeRepository from './yahtzee.repository'

jest.mock('./model/score.model')

describe('YahtzeeRepository', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be created', async () => {
    const score: IScoreInputData = {
      game: 'game1',
      player: 'player1',
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

    const scoreSpy = jest.spyOn(Score, 'insertOne').mockResolvedValue({
      _id: '123456789',
      ...score,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any)

    const yahtzeeRepository = new YahtzeeRepository()
    const result = await yahtzeeRepository.createScore(score)

    expect(scoreSpy).toHaveBeenCalledWith(score)
    expect(result).toEqual({
      _id: '123456789',
      ...score,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    })
  })
})
