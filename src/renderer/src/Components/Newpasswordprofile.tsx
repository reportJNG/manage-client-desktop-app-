import React, { useState } from 'react'
import { ArrowLeft, User, Lock, KeyRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
interface Newpasswordprofileprops {
  name: string
  id: number
  setNext: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Newpasswordprofile({
  name,
  id,
  setNext
}: Newpasswordprofileprops): React.JSX.Element {
  const navigate = useNavigate()
  const [newpassword, setNewPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const changepassword = async (): Promise<void> => {
    if (newpassword.trim().length < 6) {
      setMessage('Bad input !')
      setNewPassword('')
      setTimeout(() => {
        setMessage('')
      }, 3000)
      return
    } else {
      const result = await window.api.user.updateuserpassw({
        password: newpassword,
        id: Number(id)
      })
      if (!result.success) {
        setMessage('Failed to update password')
        setTimeout(() => {
          setMessage('')
          return
        }, 3000)
      } else {
        setMessage('Successfully updated password')
        setTimeout(() => {
          setMessage('')
          navigate('/')
          return
        }, 3000)
      }
    }

    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  return (
    <div className="w-85 border-2 border-[#808080] bg-[#eeeeee] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
      <div className="flex items-center justify-between border-b-2 border-[#808080] bg-[#0b3d91] px-2 py-1.5">
        <div className="flex items-center gap-2">
          <KeyRound size={14} strokeWidth={2} className="text-white" />
          <span className="text-sm font-bold text-white">Change Password</span>
        </div>
        <button
          onClick={() => setNext(false)}
          className="flex cursor-pointer items-center gap-1 border border-[#808080] bg-[#c0c0c0] px-2 py-0.5 text-xs font-medium text-slate-800 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] transition hover:bg-[#d0d0d0] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
        >
          <ArrowLeft size={12} strokeWidth={2} />
          Back
        </button>
      </div>

      <div className="p-4">
        <div className="mb-5 flex items-center gap-3 rounded-sm border border-[#808080] bg-[#dddddd] p-3 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
          <div className="flex h-10 w-10 items-center justify-center border border-[#808080] bg-[#eeeeee] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
            <User size={18} strokeWidth={2} />
          </div>
          <div>
            <div className="text-xs text-slate-500">Selected Profile</div>
            <div className="text-base font-bold text-slate-800">{name}</div>
          </div>
        </div>

        <form onSubmit={changepassword}>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center border border-[#808080] bg-[#dddddd] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
              <Lock size={16} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <input
                id="newpassword"
                name="newpassword"
                type="password"
                required
                minLength={6}
                title="password"
                placeholder="Enter new password"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-8 w-full border-2 border-[#808080] bg-white px-2 text-sm outline-none shadow-[inset_1px_1px_2px_#999] focus:border-[#0b3d91]"
              />
            </div>
          </div>

          {message !== '' && (
            <div className="mb-5 rounded-sm border border-[#808080] bg-[#dddddd] px-2 py-1 text-center text-xs text-slate-600 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777]">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="h-8 w-full border-2 border-[#808080] bg-[#dddddd] text-sm font-bold shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#777] transition hover:bg-[#c8c8c8] active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#777]"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  )
}
