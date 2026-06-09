import { User, XOctagon } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Userojbect } from '@shared/usertypes'
import { Link } from 'react-router-dom'
interface Profileprops {
  setId: React.Dispatch<React.SetStateAction<number>>
  setName: React.Dispatch<React.SetStateAction<string>>
  setNext: React.Dispatch<React.SetStateAction<boolean>>
}
const call = async (): Promise<boolean> => {
  return false
}

export default function Profiles({ setId, setName, setNext }: Profileprops): React.JSX.Element {
  //here we will need to make a call for all profiles in sql
  const [allowed, setAllowed] = useState<boolean>(false)
  const [objects, setObjects] = useState<Userojbect[]>([])
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
    <div>
      {allowed && (
        <div>
          <h2>
            <strong>Choose your profile</strong>
          </h2>
          {objects.map((val) => (
            <div key={val.id} onClick={() => chooseprofile(val.id, val.username)}>
              {/**here deisgn all profiles to choose wich profile to change his password */}
              <div>
                <div>
                  <User />
                </div>
                <strong>{val.username}</strong>
              </div>
            </div>
          ))}
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
          <strong>There is no profile </strong>
          <XOctagon />
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
  )
}
