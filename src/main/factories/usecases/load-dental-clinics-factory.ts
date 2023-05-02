import { DentalRepository } from '../../../infra/net/dental-repository'
import { type LoadDentalClinics } from '../../../domain/usecases/load-dental-clinics'

export const makeLoadDentalClinics = (): LoadDentalClinics => {
  return new DentalRepository()
}
