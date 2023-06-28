import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

import signupFront from '../../assets/signupFront.png'
import agecal from '../../assets/age-cal.png'

const FrontEnd = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <p className="text-2xl font-bold mb-5 flex flex-col justify-center items-center border-2 w-[400px] border-black rounded-xl p-2">
            Front-End Mentor Challenges
            <a
              className="underline text-blue-500 hover:text-blue-800"
              href="https://www.frontendmentor.io/profile/pulsarbeam"
              target="_blank"
            >
              Profile
            </a>
          </p>
        </div>
        <div className="grid justify-items-center gap-9 grid-cols-1 lg:grid-cols-2 ">
          <div className=" text-center max-w-[800px] border-slate-500 border-2 p-10 my-2 hover:shadow-[8px_8px_0px_0px_#1B9AAA] hover:border-[#1B9AAA] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
            <p className="text-center text-xl font-bold mb-2 ">Sign Up Page</p>
            <div
              style={{ backgroundImage: `url(${signupFront})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider px-4">
                  Sign Up Page
                </p>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://github.com/pulsarbeam/First-challenfe"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                      Code
                    </button>
                  </a>
                  <a target="_blank" href="https://first-challenfe.vercel.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-left font-bold mb-2 pt-10 ">
                Tech used: TypeScript, React, Tailwind, Vite.
              </p>
              <p className="text-left mb-2">
                This is my first front end mentor challenge and I Really enjoyed
                it I learnt a lot about tailwind and using amobile first
                approach, as well as prendering compoents using ternary
                operators
              </p>
              <p className="text-left">
                From this project I learnt more about form validation instead of
                using the built in validation I used regex to check for a
                correct email address.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <a
                target="_blank"
                href="https://github.com/pulsarbeam/First-challenfe"
              >
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3  flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <FaGithub /> Code
                  </div>
                </button>
              </a>
              <a target="_blank" href="https://first-challenfe.vercel.app/">
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3  flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <TbWorld /> Demo
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="max-w-[800px] border-slate-500 border-2 p-10  my-2 hover:shadow-[8px_8px_0px_0px_#577d1d] hover:border-[#577d1d] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
            <p className="text-center text-xl font-bold mb-2">Age Calculator</p>
            <div
              style={{ backgroundImage: `url(${agecal})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider text-center px-4">
                  Age Calculator
                </p>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://github.com/pulsarbeam/front-end-mentor-age-calculator"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://front-end-mentor-age-calculator.vercel.app/"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-left font-bold mb-5 pt-10">
                Tech used: TypeScript, NextJS, TailwindCSS.
              </p>
              <p className="text-left mb-2">
                This is a NextJS app that uses tailwind and typescript. It taught me a lot about styling with tialwind and using its mobile first approach.


              </p>
              <p className='text-left'>This is also helped with with doing the logic for the age calculator learning more about validating forms and use the date function built in to javascript.</p>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <a
                target="_blank"
                href="https://github.com/pulsarbeam/front-end-mentor-age-calculator"
              >
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3  flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <FaGithub /> Code
                  </div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://front-end-mentor-age-calculator.vercel.app/"
              >
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3  flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <TbWorld /> Demo
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontEnd
