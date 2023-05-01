import { internalServerError } from '../../helpers/http-helper'
import { type Controller } from '../../protocols/controller'
import { type HttpResponse } from '../../protocols/http'

export default class ClinicController implements Controller {
  handle (httpRequest: ClinicController.Request): HttpResponse {
    try {
      const clinics: ClinicController.Clinic[] = []

      if (!httpRequest.clinic) {
        return {
          statusCode: 200,
          body: clinics
        }
      }

      return {
        statusCode: 200,
        body: clinics
      }
    } catch (error) {
      return internalServerError()
    }
  }
}

export namespace ClinicController {
  export type Request = {
    clinic?: Clinic
  }

  export type Clinic = {
    name?: string
    state?: string
    availability?: string
  }
}
