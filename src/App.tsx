import './App.scss'

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

import Traiding from './components/Traiding/Traiding'
import Archive from './components/Archive/Archive'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Traiding />,
  },
  {
    path: '/archive',
    element: <Archive />,
  },
])

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="buttons"></div>
        <Link to={'/'}>TRAIDING</Link>
        <Link to={'/archive'}>ARCHIVE</Link>
        <hr />
        <RouterProvider router={router} />
      </div>
    </div>
  )
}
