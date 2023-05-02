import { type ClinicResult } from '../../domain/models'

export interface LoadDentalClinics {
  load: () => Promise<LoadDentalClinics.Result>
}

export namespace LoadDentalClinics {
  export type Result = ClinicResult[]
}
