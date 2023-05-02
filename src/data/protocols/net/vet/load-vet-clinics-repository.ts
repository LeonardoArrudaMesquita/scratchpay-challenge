import { type ClinicResult } from '../../../../domain/models'

export interface LoadVetClinicsRepository {
  load: () => Promise<LoadVetClinicsRepository.Result>
}

export namespace LoadVetClinicsRepository {
  export type Result = ClinicResult[]
}
