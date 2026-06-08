import React, { useEffect, useState } from 'react'

export default function Forgetpassword(): React.JSX.Element {
  const [thisisuser, setThisisuser] = useState<boolean>(false)
  useEffect(() => {
    const checkUser = (
      file: string,
      setThisIsUser: React.Dispatch<React.SetStateAction<boolean>>
    ): void => {
      if (file === 'user') {
        setThisIsUser(true)
      } else {
        setThisIsUser(false)
      }
    }
    checkUser('', setThisisuser)
  }, [setThisisuser])
  return (
    <div>
      {/** input to get users from his own pc file then see if i can give  perm or no*/}

      {thisisuser && <div></div>}
      {!thisisuser && <div></div>}
    </div>
  )
}
