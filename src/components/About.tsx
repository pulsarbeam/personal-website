import { Element } from 'react-scroll'
import rene from '../assets/rene.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const About = () => {
  return (
    <Element name="about">
      <TrackVisibility>
      <div className="w-full h-screen bg-[#200130] text-gray-300 ">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-10 md:pl-4 ">
              <h1 className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                About
              </h1>
            </div>
            <div></div>
          </div>

          <div className="max-w-[1200px] w-full grid sm:grid-cols-3 gap-8 px-10">
            <div className="sm:text-right text-4xl font-bold">
              <h2>Hi, I'm Rene, nice to meet you.</h2>
            </div>
            <div>
              <p>
                I'm a Full-Stack software developer. I'm passionate about web
                and software development, especially and I love to learn new
                things. I just finished studying at Dev Academy Aoetearoa and
                I'm looking for a job as a full stack developer. Please check
                out my projects and feel free to contact me if you have any
                questions.
              </p>
            </div>
            <img
              className=" mx-auto w-80 rounded-full shadow-lg shadow-[#000000] md:w-96 "
              src={rene}
              alt="Rene"
            />
          </div>
        </div>
      </div>
      </TrackVisibility>
    </Element>
  )
}

export default About
