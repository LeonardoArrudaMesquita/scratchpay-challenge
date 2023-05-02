import express, { type Express } from 'express'
import setupMiddlewares from '../config/middlewares'
import setupRoutes from '../config/routes'

export const setupApp = (): Express => {
  const app = express()
  setupMiddlewares(app)
  setupRoutes(app)
  return app
}
