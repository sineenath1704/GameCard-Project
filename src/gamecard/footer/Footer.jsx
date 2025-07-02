import React from 'react'
import './Footer.css'

const Footer = () => {

    const open = (path) => {
        window.open(path, '_self')
    }

    return (
        <>
            <div className='screenFooter bg-[#711e80]'>
                <div className='flex flex-wrap gap-28 font-averia text-white'>

                    <div className='BoxFoot1 ml-10'>

                        <h1 className='text-2xl'>GAME CARD</h1>
                        <br />

                        <p className='text-base'>Let joy lead the way, and laughter be our mission.</p>
                        <br />

                        <p className='text-sm'>Our game has just begun — and with every friend who joins, the fun grows stronger.</p>
                        <br />

                        <div className='w-[130px] rounded-xl bg-white text-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-110' onClick={() => document.getElementById('RecentGame')?.scrollIntoView({ behavior: 'smooth' })}>
                            <p className='text-sm font-bold p-2 py-3 text-[#ff78b7]'>RECENT GAME</p>
                        </div>

                    </div>

                    <div className='BoxFoot2 text-sm'>
                        <h3 className='text-base mb-3 mt-12'>About</h3>
                        <button className='mb-2' onClick={() => document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth' })} >Category Game</button> <br />
                        <button onClick={() => document.getElementById('RecentGame')?.scrollIntoView({ behavior: 'smooth' })}>Recent Game</button>
                    </div>

                    <div className='BoxFoot3 text-sm'>
                        <h3 className='text-base mb-3 mt-12'>Help</h3>
                        <button className='mb-2'>Discord</button><br />
                        <button>Contact</button>
                    </div>
                </div>

                <div className='flex justify-center mt-12'>
                    <hr className='w-[70%] border-t-[1.5px]' />
                </div>
                <br />
                <p className='text-center text-sm text-white font-averia'>© 2025 GAMECARD <span>| Privacy</span> <span>| Terms</span></p>
            </div>
        </>
    )
}

export default Footer