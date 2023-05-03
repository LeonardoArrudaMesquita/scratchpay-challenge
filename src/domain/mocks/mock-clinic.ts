import { type ClinicModel } from '../models'
import faker from 'faker'

export const mockClinicModel = (): ClinicModel => {
  return {
    name: faker.name.firstName(),
    state: faker.address.state(),
    availability: {
      from: faker.date.recent().getTime().toString(),
      to: faker.date.recent().getTime().toString()
    }
  }
}

export const mockClinicModels = (): ClinicModel[] => [
  mockClinicModel(),
  mockClinicModel()
]
