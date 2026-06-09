import { Calendar, Lock, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup(): React.JSX.Element {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  const navigate = useNavigate()
  /** no need to check input if he gonna be dumb do bad input we will just simply put as it is */
  const creating = async (): Promise<void> => {
    //before you make a call u need a fix data sent
    const newuser = {
      name: user.trim(),
      password: password.trim(),
      age: Number(age)
    }
    if (newuser.name.length > 3 && newuser.password.length > 6) {
      const result = await window.api.user.create(newuser)
      if (!result.success) {
        setMessage(result.message)
      } else {
        setMessage(result.message)
      }
      setTimeout(() => {
        setMessage('')
        if (result.success) navigate('/')
      }, 3000)
    } else {
      setMessage('Bad inputs try again')
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#c0c0c0] p-4 text-[#111]">
      <div className="w-85 border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
        <div className="mb-4 flex items-center justify-between border border-[#808080] bg-[#0b3d91] px-2 py-1 text-sm font-bold text-white">
          <div className="flex items-center gap-2">
            <span>System new profile</span>
          </div>
        </div>

        <form onSubmit={creating}>
          <div className="mb-3 flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#dddddd] text-sm"
              aria-hidden="true"
            >
              <User size={16} strokeWidth={2} />
            </div>
            <input
              id="user"
              name="user"
              type="text"
              autoComplete="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Username"
              className="h-8 flex-1 border-2 border-[#808080] bg-white px-2 text-sm outline-none shadow-[inset_1px_1px_2px_#999] focus:border-[#0b3d91]"
              minLength={3}
              required
              title="Username"
            />
          </div>

          <div className="mb-3 flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#dddddd] text-sm"
              aria-hidden="true"
            >
              <Lock size={16} strokeWidth={2} />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-8 flex-1 border-2 border-[#808080] bg-white px-2 text-sm outline-none shadow-[inset_1px_1px_2px_#999] focus:border-[#0b3d91]"
              minLength={6}
              required
              title="Password"
            />
          </div>

          <div className="mb-5 flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#dddddd] text-sm"
              aria-hidden="true"
            >
              <Calendar size={16} strokeWidth={2} />
            </div>
            <input
              id="age"
              name="age"
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              placeholder="Age"
              className="h-8 flex-1 border-2 border-[#808080] bg-white px-2 text-sm outline-none shadow-[inset_1px_1px_2px_#999] focus:border-[#0b3d91]"
              required
              title="Age"
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-1 text-sm text-slate-600">
            <span>Already have an account?</span>
            <Link
              to="/"
              className="font-semibold text-blue-900 underline-offset-4 transition hover:text-blue-700 hover:underline"
            >
              Login here
            </Link>
            {/**message */}
            <div>{message}</div>
          </div>

          <button
            type="submit"
            className="mt-4 h-8 w-full border-2 border-[#808080] bg-[#dddddd] text-sm font-bold shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  )
}
