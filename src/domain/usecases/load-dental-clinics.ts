import { type DentalModel } from '../../domain/models'

export interface LoadDentalClinics {
  load: () => Promise<LoadDentalClinics.Result>
}

export namespace LoadDentalClinics {
  export type Result = DentalModel[]
}
