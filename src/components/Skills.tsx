import { Element } from 'react-scroll'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Prisma from '../assets/prisma.png'
import Node from '../assets/node.png'
import React from '../assets/react.png'
import Typescript from '../assets/typescript.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Skills = () => {
  return (
    <Element name="skills">
      <TrackVisibility once offset={700}>
        {({ isVisible }) => (
          console.log(isVisible),
          (
            <div className="w-full h-screen bg-[#200130] text-gray-300 pb-10">
              <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                  <h1 className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                    Skills
                  </h1>
                  <p className="py-4">
                    These are the technologies I've worked with
                  </p>
                </div>

                <div
                  className={
                    isVisible
                      ? 'animate__animated animate__fadeInUp animate__slower'
                      : ''
                  }
                >
                  <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={Typescript}
                        alt="Typescript-logo-img"
                      />
                      <p className="my-4">Typescript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={Prisma}
                        alt="Knex-logo-img"
                      />
                      <p className="my-4">Prisma</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={Node}
                        alt="Node-logo-img"
                      />
                      <p className="my-4">Node</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={React}
                        alt="React-logo-img"
                      />
                      <p className="my-4">React</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={Tailwind}
                        alt="Javascript-logo-img"
                      />
                      <p className="my-4">TailwindCSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={Github}
                        alt="Github-logo-img"
                      />
                      <p className="my-4">Github</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </TrackVisibility>
    </Element>
  )
}

export default Skills
