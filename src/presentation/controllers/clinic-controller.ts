import { internalServerError, ok } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { type HttpResponse } from '../protocols/http'
import { type LoadDentalClinics } from '../../domain/usecases/load-dental-clinics'
import { type LoadVetClinics } from '../../domain/usecases/load-vet-clinics'
import { type ClinicModel } from '../../domain/models'

export class ClinicController implements Controller {
  constructor (private readonly loadDentalClinics: LoadDentalClinics, private readonly loadVetClinics: LoadVetClinics) {}

  async handle (request: ClinicController.Request): Promise<HttpResponse> {
    try {
      const dentalClinics = await this.loadDentalClinics.load()
      const vetClinics = await this.loadVetClinics.load()
      const clinics = [...dentalClinics, ...vetClinics]

      function filterClinics (clinics: ClinicModel[], filters: ClinicController.Request): ClinicModel[] {
        return clinics.filter(clinic => {
          return (
            (!filters.name || clinic.name.toLowerCase().includes(filters.name.toLowerCase())) &&
            (!filters.state || clinic.state.toLowerCase() === filters.state.toLowerCase()) &&
            (!filters.from || clinic.availability.from <= filters.from) &&
            (!filters.to || clinic.availability.to >= filters.to)
          )
        })
      }

      if (!Object.keys(request).length) {
        return ok(clinics)
      }

      const filteredClinics = filterClinics(clinics, request)

      return ok(filteredClinics)
    } catch (error) {
      return internalServerError()
    }
  }
}

export namespace ClinicController {
  export type Request = Clinic

  export type Clinic = {
    name?: string
    state?: string
    to?: string
    from?: string
  }
}
