import React, { useState } from 'react';
import './NavTop.css';

const NavTop = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='screenNavTop'>
        <div className='flex'>

          <img src="/GameCard-Project/picture/Logo.png" alt="Logo" className="LogoNav" />

          <div className='relative'>
            <div className='MenuBar' onClick={() => setMenuOpen(!menuOpen)}>
              <div className="w-6 h-[3px] bg-white"></div>
              <div className="w-6 h-[3px] bg-white"></div>
              <div className="w-6 h-[3px] bg-white"></div>
            </div>

            {menuOpen && (
              <div className="TabMenu">
                <a href="" className='TextNav'>HOME</a>
                <a href="" className='TextNav'>DISCORD</a>
                <a href="" className='TextNav'>HELP</a>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default NavTop