export type VetModel = {
  clinicName: string
  stateCode: string
  opening: Opening
}

type Opening = {
  from: string
  to: string
}
