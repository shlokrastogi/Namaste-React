const Contact = () => {
  return (
    <div className="m-4">
      <h1 className="font-bold text-center text-3xl p-4 m-4">
        Contact Us Page
      </h1>

      <form aria-label="contact-form">
        <div className="w-full sm:w-4/6 flex flex-col items-center bg-gray-100 p-4 rounded-lg  m-auto">
          <input
            type="text"
            className="border border-black p-2 m-2 w-full sm:w-1/2"
            placeholder="Name"
          />
          <input
            type="email"
            className="border border-black p-2 m-2 w-full sm:w-1/2"
            placeholder="Email"
          />
          <textarea
            className="border border-black p-2 m-2 w-full sm:w-1/2 h-32"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="font-semibold border border-black p-2 m-2 mt-8 rounded-lg w-full sm:w-1/2 hover:bg-black hover:text-white transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
