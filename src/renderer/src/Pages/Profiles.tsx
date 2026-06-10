import { User, XOctagon, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Userojbect } from '@shared/usertypes'
import { Link } from 'react-router-dom'
import Newpasswordprofile from '../Components/Newpasswordprofile'

export default function Profiles(): React.JSX.Element {
  const [allowed, setAllowed] = useState<boolean>(false)
  const [objects, setObjects] = useState<Userojbect[]>([])
  const [next, setNext] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [id, setId] = useState<number>(0)

  const call = async (): Promise<boolean> => {
    const result = await window.api.user.getallprofiles()
    if (!result.success) {
      return false
    } else {
      setObjects(result.value)
      return true
    }
  }

  useEffect(() => {
    const calling = async (): Promise<void> => {
      const result = await call()
      setAllowed(result)
    }
    calling()
  }, [])

  const chooseprofile = (id: number, name: string): void => {
    setName(name)
    setId(id)
    setNext(true)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#c0c0c0] p-4 text-[#111]">
      {!next && (
        <div className="w-85 border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
          <div className="mb-4 border border-[#808080] bg-[#0b3d91] px-2 py-1 text-center text-sm font-bold text-white">
            Select Profile
          </div>

          {allowed && objects.length > 0 && (
            <div>
              <div className="mb-3 text-center text-xs text-slate-500">
                Click a profile to continue
              </div>
              <div className="space-y-2">
                {objects.map((val) => (
                  <div
                    key={val.id}
                    onClick={() => chooseprofile(val.id, val.username)}
                    className="group flex cursor-pointer items-center justify-between gap-3 border-2 border-[#808080] bg-[#dddddd] p-2 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] transition hover:bg-[#cccccc] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#eeeeee]">
                        <User size={16} strokeWidth={2} />
                      </div>
                      <strong className="text-sm">{val.username}</strong>
                    </div>
                    <ArrowRight
                      size={14}
                      strokeWidth={2}
                      className="text-slate-500 opacity-0 transition group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col items-center justify-center gap-2 border-t border-[#808080] pt-4 text-sm">
                <div className="flex items-center justify-center gap-1 text-slate-600">
                  <span>Already have an account?</span>
                  <Link
                    to="/"
                    className="font-semibold text-blue-900 underline-offset-4 transition hover:text-blue-700 hover:underline"
                  >
                    Login here
                  </Link>
                </div>
              </div>
            </div>
          )}

          {(!allowed || objects.length === 0) && (
            <div>
              <div className="mb-4 flex flex-col items-center justify-center gap-3 text-sm text-slate-700">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-[#808080] bg-[#dddddd] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
                  <XOctagon size={24} strokeWidth={2} />
                </div>
                <strong className="text-center">No profiles found</strong>
                <div className="text-xs text-slate-500">Create an account to get started</div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-1 border-t border-[#808080] pt-4 text-sm text-slate-600">
                <span>Don&apos;t have an account?</span>
                <Link
                  to="/signup"
                  className="font-semibold text-blue-900 underline-offset-4 transition hover:text-blue-700 hover:underline"
                >
                  Create one
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
      {allowed && next && <Newpasswordprofile name={name} id={id} setNext={setNext} />}
    </main>
  )
}
