import { useState } from 'react'
import Traiding, { Order } from './components/Traiding/Traiding'
import Archive from './components/Archive/Archive'

import './App.scss'

export default function App() {
  const [activeContent, setActiveContent] = useState('traiding')
  const [archiveList, setArchiveList] = useState<Order[]>([])

  function addNewOrder(order: Order) {
    setArchiveList([...archiveList, order])
  }

  return (
    <div className="app">
      <div className="container">
        <div className="buttons">
          <button onClick={() => setActiveContent('traiding')}>TRAIDING</button>
          <button onClick={() => setActiveContent('archive')}>ARCHIVE</button>
        </div>
        <hr />
        {activeContent === 'traiding' ? (
          <Traiding addNewOrder={addNewOrder} />
        ) : (
          <Archive archiveList={archiveList} />
        )}
      </div>
    </div>
  )
}
