export type ClinicResult = {
  name: string
  state: string
  availability: Availability
}

type Availability = {
  to: string
  from: string
}
