import { Element } from 'react-scroll'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Knex from '../assets/knex.png'
import Node from '../assets/node.png'
import React from '../assets/react.png'
import Typescript from '../assets/typescript.png'

const Skills = () => {
  return (
    <Element name="skills">
      <div className="w-full h-screen bg-[#200130] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Javascript} alt="Javascript" />
              <p className="my-4">Javascript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Typescript} alt="Typescript" />
              <p className="my-4">Typescript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Knex} alt="Knex" />
              <p className="my-4">Knex</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="Node" />
              <p className="my-4">Node</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={React} alt="React" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Github} alt="Github" />
              <p className="my-4">Github</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Skills
