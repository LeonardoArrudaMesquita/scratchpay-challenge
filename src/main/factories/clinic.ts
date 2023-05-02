import { ClinicController } from '../../presentation/controllers/clinic-controller'
import { type Controller } from '../../presentation/protocols/controller'
import { makeLoadDentalClinics } from './usecases/load-dental-clinics-factory'
import { makeLoadVetClinics } from './usecases/load-vet-clinics-factory'

export const makeClinicController = (): Controller => {
  return new ClinicController(makeLoadDentalClinics(), makeLoadVetClinics())
}
