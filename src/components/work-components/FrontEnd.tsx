import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

import signupFront from '../../assets/signupFront.png'
import agecal from '../../assets/age-cal.png'

const FrontEnd = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ">
        <div className=" w-full my-2 rounded-xl flex gap-6 flex-wrap lg:flex-nowrap justify-center ">
          <div className="lg:w-1/2 w-full  ">
            <div
              style={{ backgroundImage: `url(${signupFront})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
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
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
          </div>
          <div className="lg:w-1/2">
            <p className="text-center text-xl font-bold ">Sign Up Page</p>
            <div>
              <p className="text-left font-bold mt-2 ">
                Tech used: TypeScript, React, Tailwind, Vite.
              </p>
              <p className="text-left mb-2">
                This is my first front-end mentor challenge, and I really
                enjoyed it. I learned a lot about Tailwind and using a
                mobile-first approach, as well as rendering components using
                ternary operators.
              </p>
              <p className="text-left">
                From this project, I learned more about form validation. Instead
                of using the built-in validation, I used regex to check for a
                correct email address.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <a
                target="_blank"
                href="https://github.com/pulsarbeam/First-challenfe"
              >
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3 flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <FaGithub /> Code
                  </div>
                </button>
              </a>
              <a target="_blank" href="https://first-challenfe.vercel.app/">
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3 flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <TbWorld /> Demo
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className=" w-full my-2 rounded-xl mt-10 flex gap-6 flex-wrap lg:flex-nowrap justify-center ">
          <div className="lg:w-1/2 w-full  ">
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
          </div>
          <div className="lg:w-1/2">
            <p className="text-center text-xl font-bold ">Age Calculator</p>
            <div>
              <p className="text-left font-bold mb-5 pt-3">
                Tech used: TypeScript, NextJS, TailwindCSS.
              </p>
              <p className="text-left mb-2">
                This is a NextJS app that uses Tailwind and TypeScript. It
                taught me a lot about styling with Tailwind and using its
                mobile-first approach.
              </p>
              <p className="text-left">
                This also helped me with doing the logic for the age calculator,
                learning more about validating forms and using the date function
                built into JavaScript.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <a
                target="_blank"
                href="https://github.com/pulsarbeam/front-end-mentor-age-calculator"
              >
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3 flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <FaGithub /> Code
                  </div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://front-end-mentor-age-calculator.vercel.app/"
              >
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3 flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <TbWorld /> Demo
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
            <hr />
      </div>
    </div>
  )
}

export default FrontEnd
