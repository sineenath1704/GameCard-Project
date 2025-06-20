import React from 'react'
import GameCard from './gamecard/GameCard'
import NavTop from './gamecard/nav/NavTop'
import Category from './gamecard/category/Category'
import AllGame from './gamecard/recentgame/AllGame'

const App = () => {
  return (
    <>
      <div className='screen'>
        <NavTop />
        <Category />
        <AllGame />
      </div>
    </>
  )
}

export default App