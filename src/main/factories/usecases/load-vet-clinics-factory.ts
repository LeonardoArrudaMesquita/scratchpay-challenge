import { VetRepository } from '../../../infra/net/vet-repository'
import { type LoadVetClinics } from '../../../domain/usecases/load-vet-clinics'
import { NetLoadVetClinics } from '../../../data/usecases/net-load-vet-clinics'

export const makeLoadVetClinics = (): LoadVetClinics => {
  const vetRepository = new VetRepository()
  return new NetLoadVetClinics(vetRepository)
}
