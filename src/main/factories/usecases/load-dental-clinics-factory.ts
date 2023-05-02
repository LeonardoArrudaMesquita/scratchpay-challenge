import { DentalRepository } from '../../../infra/net/dental-repository'
import { type LoadDentalClinics } from '../../../domain/usecases/load-dental-clinics'
import { NetLoadDentalClinics } from '../../../data/usecases/net-load-dental-clinics'

export const makeLoadDentalClinics = (): LoadDentalClinics => {
  const dentalRepository = new DentalRepository()
  return new NetLoadDentalClinics(dentalRepository)
}
