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
    <div className="fixed z-[100] w-full h-[80px] flex justify-between items-center px-8 bg-[#200130] text-slate-200">
      <div></div>
      {/* Menu */}

      <ul
        className="
       hidden md:flex
       text-lg 
        font-semibold
       
       "
      >
        <Link to="home" smooth={true} duration={500} className=" ">
          <li className="w-[80px] hover:font-bold">Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className="w-[80px] hover:font-bold">About</li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="w-[80px] hover:font-bold">Skills</li>
        </Link>
        <Link to="work" smooth={true} duration={500} offset={-13}>
          <li className=" w-[80px] hover:font-bold">Work</li>
        </Link>
        <li className="w-[80px] hover:font-bold">
          <Link to="contact" smooth={true} duration={500}>
            Contact
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
            : 'absolute top-0 left-0 w-full h-screen bg-[#200130] flex flex-col justify-center items-center'
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
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-sm">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/rene-groothuis-1801b01a0"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounder-sm">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/pulsarbeam"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#02856a] rounded-sm">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:renegrooth@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-sm">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1nD05czEsZXC5xuDZtREMJXrkMJZGKUMe/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
