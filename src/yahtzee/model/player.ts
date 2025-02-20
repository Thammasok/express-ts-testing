import mongoose, { Document, Schema } from 'mongoose'

interface IPlayer extends Document {
  name: string
  createdAt: Date
  updatedAt: Date
}

const playerSchema = new Schema<IPlayer>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

const Player = mongoose.model<IPlayer>('Player', playerSchema)

export default Player
