import { type HttpResponse } from '../protocols/http'

export const internalServerError = (): HttpResponse => ({
  statusCode: 500,
  body: new Error('Internal Server Error')
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
