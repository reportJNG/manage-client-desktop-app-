import {
  BarChart3,
  DoorOpenIcon,
  Home,
  LucideWallet,
  Settings,
  UserCircle,
  Users2Icon
} from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import React from 'react'

export default function Nav(): React.JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div>
      {/**logo */}
      <div>
        <img src="" alt="logo" />
      </div>
      {/**links nav ?? home clients finace report notification settings */}
      <div>
        <span className={location.pathname === '' ? '' : ''} onClick={() => navigate('/')}>
          <Home />
        </span>
        <span className={location.pathname === '' ? '' : ''} onClick={() => navigate('/')}>
          <Users2Icon />
        </span>
        <span className={location.pathname === '' ? '' : ''} onClick={() => navigate('/')}>
          <LucideWallet />
        </span>
        <span className={location.pathname === '' ? '' : ''} onClick={() => navigate('/')}>
          <BarChart3 />
        </span>
        <span className={location.pathname === '' ? '' : ''} onClick={() => navigate('/')}>
          <UserCircle />
        </span>
        <span className={location.pathname === '' ? '' : ''} onClick={() => navigate('/')}>
          <Settings />
        </span>
        <span className={location.pathname === '' ? '' : ''} onClick={() => navigate('/profiles')}>
          <DoorOpenIcon />
        </span>
      </div>
    </div>
  )
}
