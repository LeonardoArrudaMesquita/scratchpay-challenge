import { mockClinicModels } from '../../domain/mocks/mock-clinic'
import { type LoadVetClinics } from '../../domain/usecases/load-vet-clinics'

export class LoadVetClinicsSpy implements LoadVetClinics {
  result = mockClinicModels()

  async load (): Promise<LoadVetClinics.Result> {
    return this.result
  }
}
