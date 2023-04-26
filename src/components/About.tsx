import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="about">
      <div className="w-full h-screen bg-[#200130] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi, I'm Rene, nice to meet you.</p>
            </div>
            <div>
              <p>
                I'm a full stack software developer. I'm passionate about web
                and software development, especially  and I love to learn new things. I just
                finished studying at{' '}
                <span className=" border-b-2 border-pink-600">
                  Dev Academy Aoetearoa
                </span>{' '}
                and I'm looking for a job as a junior developer. Please check
                out my projects and feel free to contact me if you have any
                questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About
