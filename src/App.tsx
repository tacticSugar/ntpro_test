import './App.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
      <RouterProvider router={router} />
    </div>
  )
}
