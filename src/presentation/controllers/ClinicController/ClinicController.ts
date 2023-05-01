export default class ClinicController {
  handle (httpRequest: any): any {
    if (!httpRequest.query) {
      return {
        statusCode: 400
      }
    }

    return {
      statusCode: 400
    }
  }
}
