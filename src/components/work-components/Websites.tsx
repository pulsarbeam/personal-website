import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import squishy from '../../assets/squishy.png'
import carhub from '../../assets/carhub.png'
import cryptogoat from '../../assets/cryptogoat.png'
import electric from '../../assets/electric.png'

const Websites = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ">
        <div className=" w-full my-2 rounded-xl flex gap-6 flex-wrap lg:flex-nowrap justify-center ">
          <div className="lg:w-1/2 w-full  ">
            <div
              style={{ backgroundImage: `url(${electric})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider px-4">
                  Electrical Code of Compliance
                </p>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://github.com/pulsarbeam/electric-project"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://electric-project.vercel.app/"
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
            <p className="text-center text-xl font-bold ">
              Electrical Code of Compliance
            </p>
            <div>
              <p className="text-left font-bold mb-2 pt-4 ">
                Tech used: TypeScript, React, React-pdf, Tailwind, Vite.
              </p>
              <p className="text-left mb-2">
                This is a personal project I worked on where you fill out a form
                and it generates a PDF with the information you entered. I used
                React-pdf to generate the PDF and Tailwind for styling. I made
                this because I am a qualified Electrican and I wanted to make a
                tool that would myself and other Electricans to generate a Code
                of Compliance form easily.
              </p>
              <p className="text-left">
                From this project I learnt more about React HTML5 form
                validation, passing image data and how to dynamically print data
                to a pdf. This is an ongoing project, but I am happy with the
                progress I have made so far.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <a
                target="_blank"
                href="https://github.com/pulsarbeam/electric-project"
              >
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3 flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <FaGithub /> Code
                  </div>
                </button>
              </a>
              <a target="_blank" href="https://electric-project.vercel.app/">
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
              style={{ backgroundImage: `url(${carhub})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider text-center px-4">
                  CarHub
                </p>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://github.com/pulsarbeam/carjam"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a target="_blank" href="https://carjam.vercel.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-center text-xl font-bold ">CarHub</p>
            <div>
              <p className="text-left font-bold mb-5 pt-4">
                Tech used: TypeScript, NextJS, TailwindCSS, HeadlessUI.
              </p>
              <p className="text-left mb-2">
                This is a NextJS app that uses rapidapi to get car data, and
                images from imagin.studio, it is a mock design of a car rental
                app, during making this I learnt a lot about search
                functionality and using headless UI. Also improving my CSS
                skills. I would like to add more functionality to this app
                including adding sign in.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <a target="_blank" href="https://github.com/pulsarbeam/carjam">
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3 flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <FaGithub /> Code
                  </div>
                </button>
              </a>
              <a target="_blank" href="https://carjam.vercel.app/">
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
              style={{ backgroundImage: `url(${cryptogoat})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider text-center px-4">
                  CryptoGoat
                </p>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://github.com/pulsarbeam/crypto-app"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a target="_blank" href="https://cryptogoat-374da.web.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-center text-xl font-bold ">CryptoGoat</p>
            <div>
              <p className="text-left font-bold mb-5 pt-4">
                Tech used: JavaScript, React, Firebase, Axios and TailwindCSS
              </p>
              <p className="text-left mb-2">
                This is a Crypto Tracking App using the CoinGecko API. I made
                this app to learn how to learn how to use an API and how to use
                Firebase.
              </p>
              <p className="text-left">
                From this project I learnt a lot about using an API and how to
                use Firebase along with authentication. In the future, I would
                like to add more features and fix a few bugs. I throughly
                enjoyed making this app.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <a
                target="_blank"
                href="https://github.com/pulsarbeam/crypto-app"
              >
                <button className="text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3 flex justify-center items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out">
                  <div className="flex flex-row gap-2 items-center">
                    <FaGithub /> Code
                  </div>
                </button>
              </a>
              <a target="_blank" href="https://cryptogoat-374da.web.app/">
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

export default Websites
