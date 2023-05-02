import express, { type Express } from 'express'
import setupMiddlewares from '../config/middlewares'

export const setupApp = (): Express => {
  const app = express()
  setupMiddlewares(app)
  return app
}
