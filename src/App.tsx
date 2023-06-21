import CountriesGrid from './components/countriesGrid/CountriesGrid'
import Sidebar from './components/sidebar/Sidebar'
import './index.css'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <CountriesGrid />
    </div>
  )
}

export default App
