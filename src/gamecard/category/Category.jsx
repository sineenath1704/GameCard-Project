import React from 'react'
import './Category.css'

const Category = () => {

  const open = (path) => {
    window.open(path, '_self')
  }

  return (
    <>
    <div className='screenCat items-center'>

    <div className='flex flex-wrap'>

    <div className='BoxCat shadow-[#FBC601]' onClick={() => open('/ShowCGF')}>
        <img src="/picture/Friends.png" alt="" className='h-[80%]' />
        <h1 className='TextBoxCat text-[#FBC601]'>FRIENDS</h1>
    </div>

    <div className='BoxCat shadow-[#EFA6CA]' onClick={() => open('/ShowCGC')}>
        <img src="/picture/Couples.png" alt="" className='h-[80%]'/>
        <h1 className='TextBoxCat text-[#EFA6CA]'>COUPLES</h1>
    </div>

    <div className='BoxCat shadow-[#782088]' onClick={() => open('/ShowCGFam')}>
        <img src="/picture/Fam.png" alt="" className='h-[80%]' />
        <h1 className='TextBoxCat text-[#782088]'>FAMILY</h1>
    </div>

    <div className='BoxCat shadow-[#9E1B1D]' onClick={() => open('/ShowCGA')}>
        <img src="/picture/Adult.png" alt="" className='h-[80%]' />
        <h1 className='TextBoxCat text-[#9E1B1D]'>ADULTS</h1>
    </div>

    </div>

    <h1 className='HOMETEXT'>"Choose someone to play with!"</h1>

    </div>
    </>
  )
}

export default Category