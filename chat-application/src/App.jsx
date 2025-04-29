import React from 'react'
import Navlinks from './components/Navlinks'
import ChatList from './components/ChatList'
import ChatBox from './components/ChatBox'

const App = () => {
  return (
    <div className='flex lg:flex-row flex-col items-start w-[100%]'>
      <Navlinks />
      <ChatList />
      <ChatBox />
    </div>
  )
}

export default App