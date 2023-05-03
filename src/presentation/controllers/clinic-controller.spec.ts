import { LoadDentalClinicsSpy } from '../mocks/mock-load-dental-clinics'
import { LoadVetClinicsSpy } from '../mocks/mock-load-vet-clinics'

import faker from 'faker'
import { ClinicController } from './clinic-controller'
import { throwError } from '../../domain/mocks/test-helpers'
import { internalServerError } from '../helpers/http-helper'
import { mockClinicModels } from '../../domain/mocks/mock-clinic'

const mockRequest = (): ClinicController.Request => ({
  name: faker.name.firstName(),
  state: faker.address.state(),
  from: faker.date.recent().getTime().toString(),
  to: faker.date.recent().getTime().toString()
})

type SutTypes = {
  sut: ClinicController
  loadDentalClinicsSpy: LoadDentalClinicsSpy
  loadVetClinicsSpy: LoadVetClinicsSpy
}

const makeSut = (): SutTypes => {
  const loadDentalClinicsSpy = new LoadDentalClinicsSpy()
  const loadVetClinicsSpy = new LoadVetClinicsSpy()
  const sut = new ClinicController(loadDentalClinicsSpy, loadVetClinicsSpy)
  return {
    sut,
    loadDentalClinicsSpy,
    loadVetClinicsSpy
  }
}

describe('Clinic Controller', () => {
  it('Should return 200 when no param is provided', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({})
    expect(httpResponse.statusCode).toEqual(200)
  })

  it('Should call LoadDentalClinics and LoadVetClinics', async () => {
    const { sut, loadDentalClinicsSpy, loadVetClinicsSpy } = makeSut()
    const request = mockRequest()
    jest.spyOn(loadDentalClinicsSpy, 'load').mockResolvedValueOnce(mockClinicModels())
    jest.spyOn(loadVetClinicsSpy, 'load').mockResolvedValueOnce(mockClinicModels())
    await sut.handle(request)
    expect(loadDentalClinicsSpy.load).toHaveBeenCalled()
    expect(loadVetClinicsSpy.load).toHaveBeenCalled()
  })

  it('Should return 500 if LoadDentalClinics throws', async () => {
    const { sut, loadDentalClinicsSpy } = makeSut()
    jest.spyOn(loadDentalClinicsSpy, 'load').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(internalServerError())
  })

  it('Should return 500 if LoadVetClinics throws', async () => {
    const { sut, loadVetClinicsSpy } = makeSut()
    jest.spyOn(loadVetClinicsSpy, 'load').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(internalServerError())
  })
})
