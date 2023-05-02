import { type Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeClinicController } from '../factories/clinic'

export default (router: Router): void => {
  router.get('/clinics', adaptRoute(makeClinicController()))
}
