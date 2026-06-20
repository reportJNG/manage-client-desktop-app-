import Nav from '@renderer/Components/Nav'
import React from 'react'
import { useNavigate } from 'react-router-dom'
interface Homeprops {
  username: string
}
export default function Home({ username }: Homeprops): React.JSX.Element {
  const navigate = useNavigate()
  console.log('dd:', username)
  return (
    <div>
      {/** main header */}
      <header>
        <Nav />
      </header>
      {/**home welcome page ideas  : button to create new direct client or button to reporting  with text another one is gained money days using application another one how much clients */}
      <main>
        <div>
          {/**simple welcoming text for user  */}
          <h3>
            <strong>welcome {username}</strong>
          </h3>
        </div>
        <div>
          <button onClick={() => navigate('/')}></button>
          <button onClick={() => navigate('/')}></button>
        </div>
        {/**reporting */}
        <div>
          <div></div>
        </div>
      </main>
    </div>
  )
}
