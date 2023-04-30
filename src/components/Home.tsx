import { HiArrowNarrowRight } from 'react-icons/hi'
import { Element, Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Home = () => {
  return (
    <Element name="home">
      <div className="bg-[#200130] w-full h-screen">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-pink-500">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Rene Groothuis
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I'm a Full Stack Developer based New Zealand
          </p>

          <div className="flex flew-row flex-wrap">
            <div className="mr-4">
              <Link to="work" smooth={true} duration={500} offset={-13}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-xl">
                  View Projects
                  <span className=" group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>

            <Link to="contact" smooth={true} duration={500} offset={-13}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-xl">
                Contact
                <span className=" group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
          <div className="pt-10">
            <ul className="lg:hidden inline-grid grid-cols-2 gap-4">
              <li className="flex justify-between items-center rounded-xl  pt-2">
                <a
                  target="_blank"
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.linkedin.com/in/rene-groothuis-1801b01a0"
                >
                  <FaLinkedin size={50} />
                </a>
              </li>
              <li className="flex justify-between items-center rounded-xl  pt-2">
                <a
                  target="_blank"
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://github.com/pulsarbeam"
                >
                  <FaGithub size={50} />
                </a>
              </li>
              <li className="flex justify-between items-center rounded-xl  pt-2">
                <a
                  target="_blank"
                  className="flex justify-between items-center w-full text-gray-300"
                  href="mailto:renegrooth@gmail.com"
                >
                  <HiOutlineMail size={50} />
                </a>
              </li>
              <li className="flex justify-between items-center rounded-xl  pt-2">
                <a
                  target="_blank"
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://drive.google.com/file/d/1nD05czEsZXC5xuDZtREMJXrkMJZGKUMe/view?usp=sharing"
                >
                  <BsFillPersonLinesFill size={50} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Home
