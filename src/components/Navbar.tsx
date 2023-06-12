import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="fixed z-[100] w-full h-[80px] flex justify-between items-center px-8 bg-[#ffffff] text-black shadow-md">
      <div></div>
      {/* Menu */}
      <div className="">
        <ul className="lg:hidden inline-grid grid-cols-4 gap-1 justify-items-left">
          <li className="flex justify-between items-center rounded-xl">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-black"
              href="https://www.linkedin.com/in/rene-groothuis-1801b01a0"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li className="flex justify-between items-center rounded-xl">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-black"
              href="https://github.com/pulsarbeam"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li className="flex justify-between items-center rounded-xl">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-black"
              href="mailto:renegrooth@gmail.com"
            >
              <HiOutlineMail size={20} />
            </a>
          </li>
          <li className="flex justify-between items-center rounded-xl">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-black"
              href="ReneCV.pdf"
              download
            >
              <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
      </div>

      <ul
        className="
       hidden md:flex
       text-lg 
        font-semibold
       
       "
      >
        <li>
          <li className="mr-[650px] font-bold">
            <p>Rene.Dev</p>
          </li>
        </li>
        <Link to="home" smooth={true} duration={500} className=" ">
          <li className="w-[80px] text-neutral-700 hover:text-black relative group ">
            Home
            <div className="absolute w-0 h-2 bg-black rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:w-[30px] group-hover:opacity-100"></div>
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className="w-[80px] text-neutral-700 hover:text-black relative group ">
            About
            <div className="absolute w-0 h-2 bg-black rounded-full top-0 left-[42px] transform -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:w-[30px] group-hover:opacity-100"></div>
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="w-[80px] text-neutral-700 hover:text-black relative group ">
            Skills
            <div className="absolute w-0 h-2 bg-black rounded-full top-0 left-[40px] transform -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:w-[30px] group-hover:opacity-100"></div>
          </li>
        </Link>
        <Link to="work" smooth={true} duration={500} offset={-80}>
          <li className="w-[80px] text-neutral-700 hover:text-black relative group ">
            Work
            <div className="absolute w-0 h-2 bg-black rounded-full top-0 left-[37px] transform -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:w-[30px] group-hover:opacity-100"></div>
          </li>
        </Link>
        <li className="w-[80px] text-neutral-700 hover:text-black relative group">
          <Link to="contact" smooth={true} duration={500}>
            Contact
            <div className="absolute w-0 h-2 bg-black rounded-full transform -translate-x-1/2 top-0 left-[50px]  -translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:w-[30px] group-hover:opacity-100"></div>
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!isOpen ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !isOpen
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a1a1a] rounded-sm">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/rene-groothuis-1801b01a0"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a1a1a] rounder-sm">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/pulsarbeam"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a1a1a] rounded-sm">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:renegrooth@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a1a1a] rounded-sm">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="ReneCV.pdf"
              download
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
