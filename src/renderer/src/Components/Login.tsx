import type { FormEvent } from 'react'
import { useState } from 'react'
import { LockKeyhole, User } from 'lucide-react'

export default function Login(): React.JSX.Element {
  const validUser = 'admin'
  const validPassword = '1234'

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [rememberUser, setRememberUser] = useState(false)
  const [message, setMessage] = useState('')

  function compareUserAndPassword(): boolean {
    return user.trim() === validUser && password === validPassword
  }

  function handleLogin(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    if (compareUserAndPassword()) {
      setMessage('Login successful.')
    } else {
      setMessage('Wrong user or password.')
    }

    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#c0c0c0] p-4 text-[#111]">
      <div className="w-85 border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
        <div className="mb-4 border border-[#808080] bg-[#0b3d91] px-2 py-1 text-sm font-bold text-white">
          System Login
        </div>

        <form onSubmit={handleLogin}>
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
              onChange={(event) => setUser(event.target.value)}
              placeholder="User"
              className="h-8 flex-1 border-2 border-[#808080] bg-white px-2 text-sm outline-none shadow-[inset_1px_1px_2px_#999] focus:border-[#0b3d91]"
            />
          </div>

          <div className="mb-3 flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#dddddd] text-sm"
              aria-hidden="true"
            >
              <LockKeyhole size={16} strokeWidth={2} />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="h-8 flex-1 border-2 border-[#808080] bg-white px-2 text-sm outline-none shadow-[inset_1px_1px_2px_#999] focus:border-[#0b3d91]"
            />
          </div>

          <div className="mb-4 flex items-center justify-between text-xs">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={rememberUser}
                onChange={(event) => setRememberUser(event.target.checked)}
              />
              Remember
            </label>

            <a href="#forgot-password" className="text-[#000080] underline">
              Forget password?
            </a>
          </div>

          {message !== '' && (
            <p className="mb-3 border border-[#808080] bg-white px-2 py-1 text-xs" role="status">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="h-8 w-full border-2 border-[#808080] bg-[#dddddd] text-sm font-bold shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  )
}
