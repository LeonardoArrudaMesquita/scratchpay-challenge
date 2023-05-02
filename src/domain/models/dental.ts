export type DentalModel = {
  name: string
  stateName: string
  availability: Availability
}

type Availability = {
  from: string
  to: string
}
