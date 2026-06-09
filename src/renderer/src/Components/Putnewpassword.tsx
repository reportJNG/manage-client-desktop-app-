import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { KeyRound, Search, ArrowLeft } from 'lucide-react'

export default function Forgetpassword(): React.JSX.Element {
  const [nameuser, setNameuser] = useState<string>('')

  const getusers = (): boolean => {
    return false
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#c0c0c0] p-4 text-[#111]">
      <div className="w-85 border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
        <div className="mb-4 flex items-center justify-between border border-[#808080] bg-[#0b3d91] px-2 py-1 text-sm font-bold text-white">
          <div className="flex items-center gap-2">
            <KeyRound size={16} strokeWidth={2} />
            <span>System Password Recovery</span>
          </div>
        </div>

        <form onSubmit={getusers}>
          <div className="mb-4 text-center text-sm text-slate-600">
            Enter your username to recover your password
          </div>

          <div className="mb-5 flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#dddddd] text-sm"
              aria-hidden="true"
            >
              <Search size={16} strokeWidth={2} />
            </div>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={nameuser}
              onChange={(e) => setNameuser(e.target.value)}
              placeholder="Enter your username"
              className="h-8 flex-1 border-2 border-[#808080] bg-white px-2 text-sm outline-none shadow-[inset_1px_1px_2px_#999] focus:border-[#0b3d91]"
            />
          </div>

          <button
            type="submit"
            className="mb-4 h-8 w-full border-2 border-[#808080] bg-[#dddddd] text-sm font-bold shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
          >
            Find Profile
          </button>
        </form>

        <div className="mt-2 flex items-center justify-center gap-1 text-sm text-slate-600">
          <ArrowLeft size={14} strokeWidth={2} />
          <Link
            to="/"
            className="font-medium text-blue-900 underline-offset-4 transition hover:text-blue-700 hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </main>
  )
}
