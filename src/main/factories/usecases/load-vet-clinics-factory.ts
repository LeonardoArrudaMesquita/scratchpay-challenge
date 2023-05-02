import { VetRepository } from '../../../infra/net/vet-repository'
import { type LoadVetClinics } from '../../../domain/usecases/load-vet-clinics'

export const makeLoadVetClinics = (): LoadVetClinics => {
  return new VetRepository()
}
