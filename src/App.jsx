import React from 'react'
import SidebarComp from './components/SidebarComp'
import {Routes , Route} from 'react-router-dom'
import ChatboxComp from './components/ChatboxComp'
import CommunityPage from './pages/CommunityPage'
import CreditsPage from './pages/CreditsPage'

const App = () => {
  return (
    <div>
      <>
      <div className='dark:bg-gradient-to-b from-[#252124} to-[#000000] dark:text-white'>
        <div className='flex h-screen w-screen'>
        <SidebarComp/>
        <Routes>
          <Route path='/' element={<ChatboxComp/>}/>
          <Route path='/credits' element={<CreditsPage/>}/>
          <Route path='/community' element={<CommunityPage/>}/>
        </Routes>
      </div>
      </div>
      </>
    </div>
  )
}

export default App