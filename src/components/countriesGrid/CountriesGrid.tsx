import { getCountries } from '@/api/countries'
import { useLanguage } from '@/context/countriesContext'
import { Country } from '@/types'
import { useEffect, useState } from 'react'
import { Loader } from '../loader/Loader'
import styles from './styles.module.css'

const CountriesGrid = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true)
      try {
        const countries = await getCountries(language)
        setCountries(countries)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCountries()
  }, [language])

  if (isLoading) {
    return (
      <main className={styles.loader_wrapper}>
        <Loader />
      </main>
    )
  }

  return (
    <main className={styles.countries_grid}>
      {countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.official}
            mapLink={country.maps.googleMaps}
            flag={country.flags.png}
            capital={country.capital && country.capital[0]}
          />
        ))
      ) : (
        <div>No countries found...</div>
      )}
    </main>
  )
}

export default CountriesGrid

const CountryCard = ({
  name,
  mapLink,
  flag,
  capital,
}: {
  name: string
  mapLink: string
  flag: string
  capital: string
}) => {
  return (
    <a key={name} className={styles.country_card} href={mapLink} target='_blank'>
      <img src={flag} className={styles.country_flag} loading='lazy' />
      <div className={styles.shadow} />
      <div className={styles.country_info}>
        <div className={styles.country_name}>{name}</div>
        <div className={styles.country_capital}>{capital}</div>
      </div>
    </a>
  )
}
