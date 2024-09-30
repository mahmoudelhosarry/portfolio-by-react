const Contact = () => {
  return (
    <form className="mt-3 w-4/5 mx-auto flex flex-col items-center md:justify-start md:items-start">
      <div>
        <div className="flex flex-col  items-center  md:flex-row  gap-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            fill="#97979f"
            viewBox="0 0 24 24"
          >
            <path
              fill="#97979f"
              fillRule="evenodd"
              d="M23 6v12c0 1.652-1.348 3-3 3H4c-1.652 0-3-1.348-3-3V6a3 3 0 013-3h16a3 3 0 013 3zM3.107 5.554C3.272 5.227 3.612 5 4 5h16c.388 0 .728.227.893.554L12 11.779 3.107 5.554zM3 7.921l7.853 5.497a2 2 0 002.294 0L21 7.92V18c0 .548-.452 1-1 1H4c-.548 0-1-.452-1-1V7.92z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="h-style">Contact us</h1>
        </div>
        <p className="p-style text-center md:text-start">
          {" "}
          Contact us for more information and get notified when i puplish
          something new
        </p>
      </div>
      <div className="flex flex-col my-4  w-full md:w-96 ">
        <div className="flex flex-col  items-center my-4  md:flex-row  ">
          <label htmlFor="email" className="p-style mb-4">
            Email Address
          </label>
          <input
            id="email"
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f680] placeholder-gray-400"
            type="email"
            placeholder="Email Address"
          ></input>
        </div>
        <div className="flex flex-col  items-center  md:flex-row my-4 ">
          <label htmlFor="message" className="p-style mb-4">
            Your message:
          </label>
          <textarea
            required
            id="message"
            className="w-full h-44  bg-gray-800 text-white border border-gray-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f680] placeholder-gray-400 "
            placeholder="message"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className=" submit capitalize text-secondary text-xl py-4 bg-[#24252e] w-3/4 md:w-44 transition duration-300 font-medium hover:text-2xl rounded-2xl hover:font-black border-2 border-backgroundColor hover:border-[#3b82f680] hover:tracking-wide active:scale-95 mt-5"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
