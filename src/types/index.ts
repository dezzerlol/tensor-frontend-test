export type Country = {
  name: {
    common: string
    official: string
  }
  capital: string[]
  maps: {
    googleMaps: string
  }
  flags: {
    png: string
  }
}
