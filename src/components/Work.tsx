import { Element } from 'react-scroll'
import squishy from '../assets/squishy.png'
import nextjs from '../assets/nextjs.png'
import cryptogoat from '../assets/cryptogoat.png'
import electric from '../assets/electric.png'

const Work = () => {
  return (
    <Element name="work">
      <div className="h-full pb-[200px] bg-[#200130] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </h1>
            <p className="py-6">// Check out some of my work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            <div
              style={{ backgroundImage: `url(${electric})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider px-4">
                  Electrical Code of Compliance Project
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
            <div>
              <p className="text-left font-bold mb-2">
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
            <div
              style={{ backgroundImage: `url(${squishy})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider px-4">
                  Squishy Squish Game
                </p>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://github.com/pulsarbeam/Squishy-Squish"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-left font-bold mb-5">
                Tech used: TypeScript, React, P5js and Redux.
              </p>
              <p className="text-left mb-2">
                This was our final group project for DevAcademy we made a
                platformer.
              </p>
              <p className="text-left">
                Using React and Redux, we implemented our skills in game
                development. Although P5js, a non-game-specific engine, was
                challenging, we successfully created game physics with it. In
                the future, we would use an actual game engine like Phaser.
              </p>
              <p className="text-left"></p>
            </div>
            <div
              style={{ backgroundImage: `url(${cryptogoat})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider px-4">
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
            <div>
              <p className="text-left font-bold mb-5">
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
              <p className="text-left"></p>
            </div>

            <div
              style={{ backgroundImage: `url(${nextjs})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider text-center px-4">
                  NextJS 13.4 Image Gallery
                </p>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://github.com/pulsarbeam/NextJS-image"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://next-js-image-flax.vercel.app/"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-left font-bold mb-5">
                Tech used: TypeScript, NextJS, Bootstrap.
              </p>
              <p className="text-left mb-2">
                This is a NextJS app that renders images statically and
                dynamically, I made this app to learn how to use the new NextJS
                router and Bootstrap. I have made an app that makes API requests
                to the Unsplash API. I have a built in search bar that will
                render images you have searched for and made some items
                pre-render to help understand client and server components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Work
