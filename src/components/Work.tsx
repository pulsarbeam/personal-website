import { Element } from 'react-scroll'

import { useState } from 'react'
import Websites from './work-components/Websites'
import FrontEnd from './work-components/FrontEnd'
import { Transition } from '@headlessui/react'

const Work = () => {
  const [showWebsites, setShowWebsites] = useState(false)
  const [showFrontEnd, setShowFrontEnd] = useState(true)

  const handleWeb = () => {
    setShowFrontEnd(false)
    setShowWebsites(true)
  }
  const handleFront = () => {
    setShowFrontEnd(true)
    setShowWebsites(false)
  }

  return (
    <Element name="work">
      <div className="h-full pb-[200px] bg-[#ffffff] text-black">
        <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center h-full w-full">
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 text-black border-black ">
              Work
            </h1>
            <p className="py-6">// Check out some of my work</p>
            <div>
              <div className="text-l font-bold flex gap-4 justify-center">
                <button
                  onClick={handleFront}
                  className={`text-black bg-white text-center group border-2 px-6 py-3 flex justify-center items-center hover:text-black  rounded-xl transition duration-300 ease-in-out ${
                    !showWebsites
                      ? 'bg-[#1a202d] text-white hover:text-white'
                      : ''
                  }`}
                >
                  Projects
                </button>

                <button
                  onClick={handleWeb}
                  className={`text-black bg-white text-center group border-2 px-6 py-3 flex justify-center items-center  hover:text-black  rounded-xl transition duration-300 ease-in-out ${
                    showWebsites
                      ? 'bg-[#1a202d] text-white hover:text-white'
                      : ''
                  }`}
                >
                  Front-End Mentor
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <Transition
              show={showFrontEnd}
              enter="transition-opacity ease-in duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* Content of the "Front-End Mentor Challenges" section */}
              {showFrontEnd && <Websites />}
            </Transition>

            <Transition
              show={showWebsites}
              enter="transition-opacity ease-in duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* Content of the "Projects" section */}
              {showWebsites && <FrontEnd />}
            </Transition>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Work
