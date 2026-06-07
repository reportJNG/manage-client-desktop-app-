import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import './assets/global.css'

export default function App(): React.JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
