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

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/clients', icon: Users2Icon, label: 'Clients' },
    { path: '/finance', icon: LucideWallet, label: 'Finance' },
    { path: '/reports', icon: BarChart3, label: 'Reports' },
    { path: '/profile', icon: UserCircle, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/profiles', icon: DoorOpenIcon, label: 'Logout' }
  ]

  return (
    <nav className="border-b-2 border-[#808080] bg-[#eeeeee] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-[#808080] bg-[#0b3d91] shadow-[inset_1px_1px_0_#4a7fc7,inset_-1px_-1px_0_#062a5e]">
            <span className="text-lg font-bold text-white">$</span>
          </div>
          <span className="text-sm font-bold text-slate-800">Finance Manager</span>
        </div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            const Icon = item.icon
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-1.5 border-2 px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? 'border-[#0b3d91] bg-[#0b3d91] text-white shadow-[inset_1px_1px_0_#4a7fc7,inset_-1px_-1px_0_#062a5e]'
                    : 'border-[#808080] bg-[#dddddd] text-slate-700 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] hover:bg-[#cccccc] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]'
                }`}
              >
                <Icon size={14} strokeWidth={2} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
