import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/clinics', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
