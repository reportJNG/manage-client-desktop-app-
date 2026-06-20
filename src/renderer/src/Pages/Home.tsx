import Nav from '@renderer/Components/Nav'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PlusCircle, FileText, Users, DollarSign, TrendingUp } from 'lucide-react'

interface Homeprops {
  username: string
}

export default function Home({ username }: Homeprops): React.JSX.Element {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#c0c0c0]">
      <header>
        <Nav />
      </header>

      <main className="p-6">
        <div className="mx-auto max-w-6xl">
          {/* Welcome Section */}
          <div className="mb-6 rounded-sm border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-[#808080] bg-[#0b3d91] shadow-[inset_1px_1px_0_#4a7fc7,inset_-1px_-1px_0_#062a5e]">
                <span className="text-xl font-bold text-white">👋</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Welcome back, <span className="text-[#0b3d91]">{username}</span>
                </h3>
                <p className="text-xs text-slate-500">What would you like to do today?</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              onClick={() => navigate('/clients/new')}
              className="flex items-center justify-center gap-3 border-2 border-[#808080] bg-[#dddddd] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] transition hover:bg-[#cccccc] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
            >
              <PlusCircle size={20} strokeWidth={2} className="text-[#0b3d91]" />
              <span className="font-semibold text-slate-700">New Client</span>
            </button>
            <button
              onClick={() => navigate('/reports')}
              className="flex items-center justify-center gap-3 border-2 border-[#808080] bg-[#dddddd] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] transition hover:bg-[#cccccc] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
            >
              <FileText size={20} strokeWidth={2} className="text-[#0b3d91]" />
              <span className="font-semibold text-slate-700">Generate Report</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Total Clients</div>
                  <div className="text-2xl font-bold text-slate-800">24</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-[#808080] bg-[#dddddd] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
                  <Users size={18} strokeWidth={2} />
                </div>
              </div>
            </div>

            <div className="border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Revenue</div>
                  <div className="text-2xl font-bold text-[#0b3d91]">$12,450</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-[#808080] bg-[#dddddd] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
                  <DollarSign size={18} strokeWidth={2} />
                </div>
              </div>
            </div>

            <div className="border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Growth</div>
                  <div className="text-2xl font-bold text-green-700">+15%</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-[#808080] bg-[#dddddd] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
                  <TrendingUp size={18} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
