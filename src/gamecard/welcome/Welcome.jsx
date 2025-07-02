import React from 'react'
import './Welcome.css'

const Welcome = () => {
    return (
        <>
            <div className='screenWelcome'>
                <div className='BoxMainWelcome'>
                    <div className='BoxWelcome1 mt-16 mb-10  '>
                        <h1 className='TextWelcome text-6xl'>Welcome to your happy place!</h1>
                        <br />
                        <br />
                        <p className='TextWelcome'>
                            We created this website for everyone who wants to relax,
                            laugh, and share meaningful moments with friends, partners, or family.
                            Our fun, interactive games are designed to bring people closer together.
                            Just play, laugh, and enjoy the good times.
                            With a variety of activities and games, every moment can become a memorable one.
                        </p>
                        <br />
                        <p className='TextWelcome'>Let the fun begin!</p>

                    </div>

                    <div className='BoxWelcome2 '>
                        <div class="relative w-[240px] h-[330px] mx-auto my-12 perspective-1000">
                            <div
                                className='class="absolute inset-0 rounded-2xl shadow-[-8px_-8px_2px]
                                            flex items-center justify-center overflow-hidden
                                            bg-[#EFA6CA] transform -rotate-[14deg]
                                            shadow-[#680A75] h-[350px] -translate-x-28
                                            bg-[url("/picture/BG-Noise.png")]'>
                                <img src="/picture/CardLogo.png" alt="G Game Logo" class="max-w-[50%] max-h-[70%] object-contain" />
                            </div>
                            <div
                                class="absolute inset-0 rounded-2xl 
                                        flex items-center justify-center bg-white
                                        transform rotate-[25deg]
                                        border-2 border-black shadow-[5px_5px_0px] shadow-[#9E1B1D] translate-x-11 translate-y-10 "
                            >
                                <p class="text-[30px] text-[#9E1B1D] text-left font-bold font-averia leading-tight mx-8">
                                    "It's playtime! Who's in?"
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Welcome