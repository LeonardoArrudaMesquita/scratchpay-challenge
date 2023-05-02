import { AxiosHelper } from './axios-helper'
import { type LoadVetClinicsRepository } from '../../data/protocols/net/vet'

export class VetRepository implements LoadVetClinicsRepository {
  async load (): Promise<LoadVetClinicsRepository.Result> {
    const { data: vets } = await AxiosHelper.get('https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json')

    return vets
  }
}
