import { type ClinicResult } from '../../domain/models'

export interface LoadVetClinics {
  load: () => Promise<LoadVetClinics.Result>
}

export namespace LoadVetClinics {
  export type Result = ClinicResult[]
}
