import { LanguageType } from '@/context/countriesContext'
import { Country } from '@/types'

const base_url = 'https://restcountries.com/v3.1'

export const getCountries = async (language: LanguageType): Promise<Country[]> => {
  const query = language === 'all' ? '/all' : `/lang/${language}`
  const response = await fetch(`${base_url}/${query}?fields=name,flags,capital,maps,translations`)
  const countries = await response.json()

  return countries
}
