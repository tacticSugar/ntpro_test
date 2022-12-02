import { useEffect, useState } from 'react'
import Traiding from './components/Traiding/Traiding'
import Archive from './components/Archive/Archive'

import './App.scss'

const options = [
  { label: 'USD/RUB', value: 'USD/RUB' },
  { label: 'USD/CAD', value: 'USD/CAD' },
  { label: 'EUR/CAD', value: 'EUR/CAD' },
  { label: 'EUR/RUB', value: 'EUR/RUB' },
]

export default function App() {
  const [activeContent, setActiveContent] = useState('traiding')
  const [price, setPrice] = useState((Math.random() * 10).toFixed(2))
  const [archiveList, setArchiveList] = useState([])
  const [activePair, setActivePair] = useState('USD/RUB')

  useEffect(() => {
    setInterval(() => {
      setPrice((Math.random() * 10).toFixed(4))
    }, 5000)
  }, [])

  return (
    <div className="app">
      <button onClick={() => setActiveContent('traiding')}>TRAIDING</button>
      <button onClick={() => setActiveContent('archive')}>ARCHIVE</button>
      <hr />
      {activeContent === 'traiding' ? (
        <Traiding
          price={price}
          options={options}
          activePair={activePair}
          setActivePair={setActivePair}
          setArchiveList={setArchiveList}
        />
      ) : (
        <Archive archiveList={archiveList} />
      )}
    </div>
  )
}
