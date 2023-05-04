import { Element } from 'react-scroll'
import squishy from '../assets/squishy.png'
import todo from '../assets/todo.png'
import cryptogoat from '../assets/cryptogoat.png'

const Work = () => {
  return (
    <Element name="work">
      <div className="w-full md:h-screen bg-[#200130] text-gray-300">
        <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center h-full w-full pb-[100px]">
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </h1>
            <p className="py-6">// Check out some of my work</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-9">
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
              style={{ backgroundImage: `url(${todo})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <p className="text-2xl font-bold text-white tracking-wider text-center px-4">
                  Todo List Full Stack
                </p>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://rene-todo.devacademy.online/?"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-left font-bold mb-5">
                Tech used: TypeScript, React, Redux, SQLite3, Knex.
              </p>
              <p className="text-left mb-2">
                This is a Todo FullStack App, I made this app to learn how to
                use the fullstack. In which we joined the frontend and backend
                together. We saved states using Redux and used SQLite3 to save
                the data.
              </p>

              <p className="text-left">
                From this project I learnt a lot about Redux and asyncthunks,
                the flow of fullstack, and implementing what we learnt at Dev
                Academy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Work
