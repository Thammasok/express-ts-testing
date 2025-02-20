import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 3000
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/yahtzee'

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// MongoDB connection
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err)
  })

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})

export default app
