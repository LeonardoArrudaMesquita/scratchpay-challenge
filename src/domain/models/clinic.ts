export type ClinicResult = {
  name: string
  state: string
  availability: Availability
}

type Availability = {
  from: string
  to: string
}
