import { Element } from 'react-scroll'
import squishy from '../assets/squishy.png'

const Work = () => {
  return (
    <Element name="work">
      <div className="w-full md:h-screen bg-[#200130] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
          <div className="pb-8 ">
            <h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </h1>
            <p className="py-6">// Check out some of my work</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              style={{ backgroundImage: `url(${squishy})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <span className="text-2xl font-bold text-white tracking-wider px-4">
                  Squishy Squish Game
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://github.com/harakeke-2023/Squishy-Squish"
                  >
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <p className='text-left'>
                    This was our final group project for DevAcademy we made a
                    platformer using p5 and React.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*
            <div
              style={{ backgroundImage: `url(${workImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider text-center ">
                  React TS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${workImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
            
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  react JS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${workImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
           
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider text-center ">
                  React TS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${workImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  react JS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${workImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
            
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider text-center ">
                  React TS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="texxt-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </Element>
  )
}

export default Work
