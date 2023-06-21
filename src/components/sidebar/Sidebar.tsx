import { Languages, useLanguage } from '@/context/countriesContext'
import styles from './styles.module.css'

const Sidebar = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={styles.sidebar}>
      <div className={styles.links}>
        <button onClick={() => setLanguage('all')} className={`${styles.sidebar_link} ${styles.all}`}>
          Все
        </button>

        {Languages.map((l) => (
          <button
            key={l}
            onClick={() => setLanguage(l)}
            className={`${styles.sidebar_link} ${l === language && styles.active}`}>
            {l}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
