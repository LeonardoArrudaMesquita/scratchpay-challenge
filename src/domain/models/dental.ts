export type DentalModel = {
  name: string
  stateName: string
  availability: Availability
}

type Availability = {
  to: string
  from: string
}
