import { AxiosHelper } from './axios-helper'
import { type LoadDentalClinicsRepository } from '../../data/protocols/net/dental'

export class DentalRepository implements LoadDentalClinicsRepository {
  async load (): Promise<LoadDentalClinicsRepository.Result> {
    const { data: dentals } = await AxiosHelper.get('https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json')

    return dentals
  }
}
