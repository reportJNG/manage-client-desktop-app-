import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './assets/global.css'
import Changepassword from './Pages/Changepassword'

export default function App(): React.JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/changepassword" element={<Changepassword />} />
      </Routes>
    </HashRouter>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
