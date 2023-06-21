import React, { createContext, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}
type Context = {
  language: LanguageType
  setLanguage: (l: LanguageType) => void
}

export type LanguageType = (typeof Languages)[number] | 'all'

export const Languages = [
  'chinese',
  'spanish',
  'english',
  'arabic',
  'hindi',
  'bengali',
  'portuguese',
  'russian',
  'japanese',
  'italian',
  'french',
  'korean',
  'german',
] as const

const Langauge = createContext<Context | null>(null)

export const LangaugeProvider = ({ children }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [language, setLang] = useState<LanguageType>((searchParams.get('language') as LanguageType) || 'all') // Получение страны из URLa

  const setLanguage = (l: LanguageType) => {
    searchParams.set('language', l)
    setSearchParams(searchParams)
    setLang(l)
  }

  return <Langauge.Provider value={{ language, setLanguage }}>{children}</Langauge.Provider>
}

export const useLanguage = () => {
  const context = useContext(Langauge)

  if (!context) throw new Error('Langauge must be called from within the LangaugeProvider')

  return context
}
