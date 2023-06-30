import { Element } from 'react-scroll'

const Contact = () => {
  return (
    <Element name="contact">
      <div className="w-full h-full p-4 bg-[#ffffff] flex justify-center items-center ">
        <form
          method="POST"
          action="https://getform.io/f/31cbc424-080f-4ccb-bd35-b23de9773adb"
          className="flex flex-col max-w-[1000px]"
        >
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-black text-black ">
              Contact
            </h1>
            <p className="text-black pt-4">
              // Submit the form below or shoot me an email -
              renegrooth@gmail.com
            </p>
          </div>

          <input
            className="p-2 bg-[#e7e6e6] rounded-xl "
            type="text"
            placeholder="Name"
            name="name"
            aria-label="Enter your name"
            required
          />

          <input
            className="my-4 p-2 bg-[#e7e6e6] rounded-xl"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-2 bg-[#e7e6e6] rounded-xl "
            name="message"
            rows={10}
            placeholder="Message"
            required
          ></textarea>
          <button
            className={`text-[#fff6f6] bg-[#1a202c] text-center my-10 group border-2 px-6 py-3  flex justify-center items-center hover:shadow-[0px_8px_0px_0px_#1a202c] hover:border-[#1a202c] hover:text-[#1a202c] hover:bg-white rounded-xl transition duration-300 ease-in-out`}
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </Element>
  )
}

export default Contact
