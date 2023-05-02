export type VetModel = {
  clinicName: string
  stateCode: string
  opening: Opening
}

type Opening = {
  to: string
  from: string
}
