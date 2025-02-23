import Score, { IScoreInputData, IScoreScheema } from './model/score.model'

class YahtzeeRepository {
  async createScore(score: IScoreInputData): Promise<IScoreScheema> {
    return await Score.insertOne(score)
  }

  async getScoresByGame(game: string): Promise<IScoreScheema[]> {
    return await Score.find({
      game,
    })
  }
}

export default YahtzeeRepository
