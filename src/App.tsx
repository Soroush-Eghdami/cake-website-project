import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ROUTES } from './router/AppRouter'
import Navbar from './components/layout/Navbar'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
          <Route path={ROUTES.HOME}   
          element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
