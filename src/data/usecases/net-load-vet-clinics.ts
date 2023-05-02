import { type LoadVetClinicsRepository } from '../../data/protocols/net/vet'
import { type VetModel } from '../../domain/models'
import { type LoadVetClinics } from '../../domain/usecases/load-vet-clinics'

export class NetLoadVetClinics implements LoadVetClinics {
  constructor (
    private readonly loadVetClinicsRepository: LoadVetClinicsRepository
  ) {}

  async load (): Promise<LoadVetClinics.Result> {
    const vets = await this.loadVetClinicsRepository.load()

    if (!vets) {
      return []
    }

    return vets.map(({ clinicName, opening, stateCode }: VetModel) => ({
      name: clinicName,
      state: stateCode,
      availability: opening
    }))
  }
}
