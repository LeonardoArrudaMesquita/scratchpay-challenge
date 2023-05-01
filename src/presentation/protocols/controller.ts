import { type HttpResponse } from './http'

export interface Controller<T = any> {
  handle: (httpRequest: T) => HttpResponse
}
