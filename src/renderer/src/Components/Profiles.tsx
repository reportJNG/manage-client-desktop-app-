import { User, XOctagon } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Userojbect } from '@shared/usertypes'
import { Link } from 'react-router-dom'

interface Profileprops {
  setId: React.Dispatch<React.SetStateAction<number>>
  setName: React.Dispatch<React.SetStateAction<string>>
  setNext: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Profiles({ setId, setName, setNext }: Profileprops): React.JSX.Element {
  //here we will need to make a call for all profiles in sql
  const [allowed, setAllowed] = useState<boolean>(false)
  const [objects, setObjects] = useState<Userojbect[]>([])
  const call = async (): Promise<boolean> => {
    const result = await window.api.user.getallprofiles()
    if (!result.success) {
      return false
    } else {
      setObjects((prev) => [...prev, result.value])
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
      <div className="w-85 border-2 border-[#808080] bg-[#eeeeee] p-4 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
        <div className="mb-4 border border-[#808080] bg-[#0b3d91] px-2 py-1 text-sm font-bold text-white">
          Select Profile
        </div>

        {allowed && (
          <div>
            <div className="mb-4 text-sm font-semibold text-slate-700">Choose your profile:</div>
            <div className="space-y-2">
              {objects.map((val) => (
                <div
                  key={val.id}
                  onClick={() => chooseprofile(val.id, val.username)}
                  className="flex cursor-pointer items-center gap-3 border-2 border-[#808080] bg-[#dddddd] p-2 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] transition hover:bg-[#cccccc] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
                >
                  <div className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#eeeeee]">
                    <User size={16} strokeWidth={2} />
                  </div>
                  <strong className="text-sm">{val.username}</strong>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col items-center justify-center gap-2 text-sm">
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

        {!allowed && (
          <div>
            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-slate-700">
              <strong>There is no profile</strong>
              <div className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#dddddd]">
                <XOctagon size={16} strokeWidth={2} />
              </div>
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
          </div>
        )}
      </div>
    </main>
  )
}
