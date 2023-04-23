import { Element } from 'react-scroll'
import workImg from '../assets/workImg.jpeg'

const Work = () => {
  return (
    <Element name="work">
      <div className="w-full md:h-screen bg-[#200130] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
          <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </p>
            <p className="py-6">// Check out some of my work</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              style={{ backgroundImage: `url(${workImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effect */}
              <div className="opacity-0 group-hover:opacity-80">
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
              {/* hover effect */}
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
              {/* hover effect */}
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
              {/* hover effect */}
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
              {/* hover effect */}
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
              {/* hover effect */}
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
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Work
