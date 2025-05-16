import { useState } from 'react'

import { IoSettingsOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { CgBowl, CgCalculator, CgGym } from "react-icons/cg";

const Aside = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <aside onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}} 
           className={`${isHover? 
            'bg-[#06242E]' : 
            'bg-transparent'
            } w-fit h-[95%] py-3 px-6 rounded-lg duration-500 cursor-pointer shrink-0`}
    >
      <main className={`w-full h-full flex flex-col ${isHover? 'justify-between' : 'justify-start gap-6'}`}>
        <nav className='w-full h-fit flex flex-col items-start justify-start gap-6'>
          <button className={`
              w-full flex flex-row gap-2 items-center justify-start text-xl cursor-pointer
              ${isHover? 'text-[#f8f7f5] hover:text-[#29b786] hover:scale-105 duration-300' : 'text-[#06242E]'}
            `}>
              <CgBowl className='text-4xl'/>
              {isHover && <span>Diet</span>}
          </button>
          <button className={`
              w-full flex flex-row gap-2 items-center justify-start text-xl cursor-pointer
              ${isHover? 'text-[#f8f7f5] hover:text-[#29b786] hover:scale-105 duration-300' : 'text-[#06242E]'}
            `}>
              <CgCalculator className='text-4xl'/>
              {isHover && <span>Finances</span>}
          </button>
          <button className={`
              w-full flex flex-row gap-2 items-center justify-start text-xl cursor-pointer
              ${isHover? 'text-[#f8f7f5] hover:text-[#29b786] hover:scale-105 duration-300' : 'text-[#06242E]'}
            `}>
              <CgGym className='text-4xl'/>
              {isHover && <span>Workout</span>}
          </button>
        </nav>
        <section className='w-full h-fit flex flex-col items-end justify-start gap-6'>
          <a href='https://github.com/pm-ramoss/LifeTrack' target="_blank" className={`
              w-full flex flex-row gap-2 items-center justify-start text-xl cursor-pointer
              ${isHover? 'text-[#f8f7f5] hover:text-[#29b786] hover:scale-105 duration-300' : 'text-[#06242E]'}
            `}>
              <IoLogoGithub className='text-4xl'/>
              {isHover && <span>Git</span>}
          </a>
          <button className={`
              w-full flex flex-row gap-2 items-center justify-start text-xl cursor-pointer
              ${isHover? 'text-[#f8f7f5] hover:text-[#29b786] hover:scale-105 duration-300' : 'text-[#06242E]'}
            `}>
              <IoSettingsOutline className='text-4xl'/>
              {isHover && <span>Settings</span>}
          </button>
        </section>
      </main>
    </aside>
  )
}

export default Aside
