import { ClinicController } from './'

describe('ClinicController', () => {
  it('should return 400 if no criteria is provided', () => {
    const sut = new ClinicController()

    const httpRequest = {
      query: {}
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
