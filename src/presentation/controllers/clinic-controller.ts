import { internalServerError, ok } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { type HttpResponse } from '../protocols/http'
import { type LoadDentalClinics } from '../../domain/usecases/load-dental-clinics'
import { type LoadVetClinics } from '../../domain/usecases/load-vet-clinics'

export class ClinicController implements Controller {
  constructor (private readonly loadDentalClinics: LoadDentalClinics, private readonly loadVetClinics: LoadVetClinics) {}

  async handle (request: ClinicController.Request): Promise<HttpResponse> {
    try {
      const dentalClinics = await this.loadDentalClinics.load()

      if (!request) {
        return ok(dentalClinics)
      }

      return ok(dentalClinics)
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
    availability?: Availability
  }

  type Availability = {
    to: string
    from: string
  }
}
