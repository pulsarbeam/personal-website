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
                  className="text-[#fff6f6] bg-[#1a202c] group text-center  group border-2 px-6 py-3  flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-gradient-to-r from-yellow-200 via-yellow-300 to-green-300 rounded-xl transition duration-300 ease-in-out"
                >
                  Projects
                </button>

                <button
                  onClick={handleWeb}
                  className="text-[#fff6f6] bg-[#1a202c] text-center  group border-2 px-6 py-3  flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 rounded-xl transition duration-300 ease-in-out"
                >
                  Front-End Mentor Challenges
                </button>
              </div>
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
