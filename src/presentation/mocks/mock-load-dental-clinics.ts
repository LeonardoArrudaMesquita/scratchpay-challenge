import { mockClinicModels } from '../../domain/mocks/mock-clinic'
import { type LoadDentalClinics } from '../../domain/usecases/load-dental-clinics'

export class LoadDentalClinicsSpy implements LoadDentalClinics {
  result = mockClinicModels()

  async load (): Promise<LoadDentalClinics.Result> {
    return this.result
  }
}
