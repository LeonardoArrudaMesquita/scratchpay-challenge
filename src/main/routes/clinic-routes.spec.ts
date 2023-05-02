import { setupApp } from '../config/app'
import request from 'supertest'

const app = setupApp()

describe('Clinic Routes', () => {
  it('should return all clinics on success', async () => {
    await request(app)
      .get('/api/clinics')
      .expect(200)
  })
})
