import type { FormEvent } from 'react'
import { useState } from 'react'
import { LockKeyhole, User } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Login(): React.JSX.Element {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [rememberUser, setRememberUser] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const cleanname = user.trim()
    const cleanpassword = password.trim()

    const correct = cleanname.length >= 3 && cleanpassword.length >= 6

    if (!correct) {
      setMessage('Failed to login bad input')
      setTimeout(() => {
        setMessage('')
      }, 3000)
      setUser('')
      setPassword('')
      return
    }
    const result = await window.api.user.login({ name: user, password, age: 0 })
    setMessage(result.message)
    setUser('')
    setPassword('')
    setTimeout(() => {
      setMessage('')
    }, 3000)
    //here i wanna save his id and sent it to main
    //const id = result.value?.id
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
              required
              minLength={3}
              title="Name"
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
              required
              minLength={6}
              title="Password"
              className="h-8 flex-1 border-2 border-[#808080] bg-white px-2 text-sm outline-none shadow-[inset_1px_1px_2px_#999] focus:border-[#0b3d91]"
            />
          </div>

          <div className="mb-5 flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                checked={rememberUser}
                onChange={(event) => setRememberUser(event.target.checked)}
                className="h-4 w-4 cursor-pointer rounded border-slate-300 accent-blue-900"
              />
              <span>Remember me</span>
            </label>

            <Link
              to="/profiles"
              className="font-medium text-blue-900 underline-offset-4 transition hover:text-blue-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="mt-5 flex items-center justify-center gap-1 text-sm text-slate-600">
            <span>Don&apos;t have an account?</span>

            <Link
              to="/signup"
              className="font-semibold text-blue-900 underline-offset-4 transition hover:text-blue-700 hover:underline"
            >
              Create one
            </Link>
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
