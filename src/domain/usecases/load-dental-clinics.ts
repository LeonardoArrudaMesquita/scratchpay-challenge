import { type ClinicModel } from '../../domain/models'

export interface LoadDentalClinics {
  load: () => Promise<LoadDentalClinics.Result>
}

export namespace LoadDentalClinics {
  export type Result = ClinicModel[]
}
