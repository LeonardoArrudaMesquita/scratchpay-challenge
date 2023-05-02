import { AxiosHelper } from './axios-helper'
import { type LoadVetClinicsRepository } from '../../data/protocols/net/vet'
import { type VetModel } from '../../domain/models'

export class VetRepository implements LoadVetClinicsRepository {
  async load (): Promise<LoadVetClinicsRepository.Result> {
    const { data: vets } = await AxiosHelper.get('https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json')

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
