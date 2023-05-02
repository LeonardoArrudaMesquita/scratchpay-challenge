import { type LoadDentalClinicsRepository } from '../../data/protocols/net/dental/load-dental-clinics-repository'
import { type DentalModel } from '../../domain/models'
import { type LoadDentalClinics } from '../../domain/usecases/load-dental-clinics'

export class NetLoadDentalClinics implements LoadDentalClinics {
  constructor (
    private readonly loadDentalClinicsRepository: LoadDentalClinicsRepository
  ) {}

  async load (): Promise<LoadDentalClinics.Result> {
    const dentals = await this.loadDentalClinicsRepository.load()

    if (!dentals) {
      return []
    }

    return dentals.map(({ name, stateName, availability }: DentalModel) => ({
      name,
      state: stateName,
      availability
    }))
  }
}
