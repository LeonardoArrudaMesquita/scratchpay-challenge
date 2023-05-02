import { cors } from '../middlewares'

import express, { type Express } from 'express'

export default (app: Express): void => {
  app.use(cors)
  app.use(express.urlencoded({ extended: true }))
}
