import { ClinicController } from './'

describe('ClinicController', () => {
  it('should return all clinics when no search criteria is provided', () => {
    const sut = new ClinicController()

    const httpRequest = {}
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(200)
  })

  it('should return filtered clinics when one or multiple search criteria are provided', () => {
    const sut = new ClinicController()

    const httpRequest = {
      clinic: {
        name: 'any_name',
        state: 'any_state',
        availability: 'any_availability'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(200)
  })
})
