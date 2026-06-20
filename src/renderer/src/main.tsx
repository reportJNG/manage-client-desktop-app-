import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './assets/global.css'
import Profiles from './Pages/Profiles'
import Home from './Pages/Home'
import { useState } from 'react'

export default function App(): React.JSX.Element {
  const [userprofile, setUserprofile] = useState<string>('')
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={(name) => setUserprofile(name)} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/home" element={<Home username={userprofile} />} />
      </Routes>
    </HashRouter>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
