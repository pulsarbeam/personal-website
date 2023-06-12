import { HiArrowNarrowRight } from 'react-icons/hi'
import { Element, Link } from 'react-scroll'

const Home = () => {
  return (
    <>
      <Element name="home">
        <div className="bg-[#ffffff] w-full h-screen">
          {/* Container */}
          <div className="mx-auto px-8 flex flex-col justify-center items-center h-full overflow-hidden">
            <div>
              <p className="text-neutral-700 ">Hi, my name is</p>

              <h1 className="text-4xl sm:text-7xl font-bold text-black">
                Rene Groothuis 👋
              </h1>

              <h2 className="text-4xl sm:text-7xl font-bold text-black">
                I'm a Full Stack Developer
              </h2>

              <p className="text-[#000000] py-4 max-w-[700px]">
                I'm a Full Stack Developer based in Auckland, New Zealand 📍
              </p>
            </div>

            <div className="flex flew-row flex-wrap">
              <div className="mr-4">
                <Link to="work" smooth={true} duration={500} offset={-13}>
                  <button className="text-neutral-700 group border-2 px-6 py-3 my-2 flex items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
                    View Projects
                    <span className=" group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-3" />
                    </span>
                  </button>
                </Link>
              </div>

              <Link to="contact" smooth={true} duration={500} offset={-13}>
                <button className="text-neutral-700 group border-2 px-6 py-3 my-2 flex items-center hover:shadow-[8px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] rounded-xl transition duration-300 ease-in-out">
                  Contact
                  <span className=" group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default Home
