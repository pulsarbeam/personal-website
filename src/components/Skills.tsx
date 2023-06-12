import { Element } from 'react-scroll'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Redux from '../assets/redux.png'
import Node from '../assets/node.png'
import React from '../assets/react.png'
import Typescript from '../assets/typescript.png'

const Skills = () => {
  return (
    <Element name="skills">
      <div className="w-full h-screen bg-[#ffffff] text-black pb-10">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <h1 className="text-4xl font-bold inline border-b-4 border-black ">
              Skills
            </h1>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8=2">
            <div className="text-neutral-700 group border-slate-500 border-2 px-6 py-3 my-2 flex items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
              <img
                className="w-20 mx-auto"
                src={Typescript}
                alt="Typescript-logo-img"
              />
            </div>
            <div className="group border-slate-500 border-2 px-6 py-4 my-2 flex items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
              <img className="w-20 mx-auto" src={Redux} alt="redux-logo-img" />
            </div>
            <div className="text-neutral-700 group border-slate-500 border-2 px-6 py-3 my-2 flex items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
              <img className="w-20 mx-auto" src={Node} alt="Node-logo-img" />
            </div>
            <div className="text-neutral-700 group border-2 border-slate-500 px-6 py-3 my-2 flex items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
              <img className="w-20 mx-auto" src={React} alt="React-logo-img" />
            </div>

            <div className="text-neutral-700 group border-2 border-slate-500 px-6 py-3 my-2 flex items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
              <img
                className="w-20 mx-auto"
                src={Tailwind}
                alt="Javascript-logo-img"
              />
            </div>
            <div className="text-neutral-700 group border-2 border-slate-500 px-6 py-3 my-2 flex items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
              <img
                className="w-20 mx-auto"
                src={Github}
                alt="Github-logo-img"
              />
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-6 lg:grid-cols-6 gap-4 text-center">
            <p className=" text-xl font-bold ">Typescript</p>
            <p className=" text-xl font-bold ">Redux</p>
            <p className=" text-xl font-bold ">Node</p>
            <p className=" text-xl font-bold ">React</p>
            <p className=" text-xl font-bold ">TailwindCSS</p>
            <p className=" text-xl font-bold ">Github</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Skills
