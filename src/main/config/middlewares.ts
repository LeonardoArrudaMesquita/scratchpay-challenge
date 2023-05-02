import { cors } from '../middlewares'

import { type Express } from 'express'

export default (app: Express): void => {
  app.use(cors)
}
