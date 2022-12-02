import { useEffect, useState } from 'react'
import Traiding from './components/Traiding/Traiding'
import Archive from './components/Archive/Archive'

import './App.scss'
import { configuration } from './configuration'
import { Modal } from './components/Modal/Modal'

export default function App() {
  const [activeContent, setActiveContent] = useState('traiding')
  const [archiveList, setArchiveList] = useState([])

  function addNewOrder() {}

  return (
    <div className="app">
      <div className="container">
        <div className="buttons">
          <button onClick={() => setActiveContent('traiding')}>TRAIDING</button>
          <button onClick={() => setActiveContent('archive')}>ARCHIVE</button>
        </div>
        <hr />
        {activeContent === 'traiding' ? (
          <Traiding setArchiveList={setArchiveList} />
        ) : (
          <Archive archiveList={archiveList} />
        )}
      </div>
    </div>
  )
}
