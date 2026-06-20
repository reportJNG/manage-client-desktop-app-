import Nav from '@renderer/Components/Nav'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home(): React.JSX.Element {
  const navigate = useNavigate()
  return (
    <div>
      {/** main header */}
      <header>
        <Nav />
      </header>
      {/**home welcome page ideas  : button to create new direct client or button to reporting  with text another one is gained money days using application another one how much clients */}
      <main>
        <div>{/**simple welcoming text for user  */}</div>
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
