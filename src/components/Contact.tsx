import { Element } from 'react-scroll'

const Contact = () => {
  return (
    <Element name="contact">
      <div className="w-full h-full p-4 bg-[#200130] flex justify-center items-center">
        <form
          method="POST"
          action="https://getform.io/f/31cbc424-080f-4ccb-bd35-b23de9773adb"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </h1>
            <p className="text-gray-300 py-4">
              // Submit the form below or shoot me an email -
              renegrooth@gmail.com
            </p>
          </div>

          <input
            className="p-2 bg-[#ccd6f6]"
            type="text"
            placeholder="Name"
            name="name"
            aria-label="Enter your name"
          />

          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-2 bg-[#ccd6f6]"
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-xl">
            Let's Collaborate
          </button>
        </form>
      </div>
    </Element>
  )
}

export default Contact
