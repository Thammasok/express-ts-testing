import mongoose, { Schema, Document } from 'mongoose'

export interface IScoreInputData {
  game: string
  player: string
  ones: number
  twos: number
  threes: number
  fours: number
  fives: number
  sixes: number
  threeOfAKind: number
  fourOfAKind: number
  fullHouse: number
  smallStraight: number
  largeStraight: number
  yahtzee: number
  chance: number
  upperTotal: number
  lowerTotal: number
  grandTotal: number
}
export interface IScoreScheema extends IScoreInputData, Document {
  createdAt: Date
  updatedAt: Date
}

const ScoreSchema: Schema = new Schema(
  {
    game: { type: String, required: true },
    player: { type: String, required: true },
    ones: { type: Number, default: 0 },
    twos: { type: Number, default: 0 },
    threes: { type: Number, default: 0 },
    fours: { type: Number, default: 0 },
    fives: { type: Number, default: 0 },
    sixes: { type: Number, default: 0 },
    threeOfAKind: { type: Number, default: 0 },
    fourOfAKind: { type: Number, default: 0 },
    fullHouse: { type: Number, default: 0 },
    smallStraight: { type: Number, default: 0 },
    largeStraight: { type: Number, default: 0 },
    yahtzee: { type: Number, default: 0 },
    chance: { type: Number, default: 0 },
    upperTotal: { type: Number, default: 0 },
    lowerTotal: { type: Number, default: 0 },
    grandTotal: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<IScoreScheema>('Score', ScoreSchema)
