import { type DentalModel } from '../../../../domain/models'

export interface LoadDentalClinicsRepository {
  load: () => Promise<LoadDentalClinicsRepository.Result>
}

export namespace LoadDentalClinicsRepository {
  export type Result = DentalModel[]
}
