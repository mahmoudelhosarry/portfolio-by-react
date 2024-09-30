const Hero = () => {
  return (
    <section className="flex mt-10 w-4/5 mx-auto ">
      <div className="">
        <div className="   flex items-end justify-center md:justify-start mb-9 py-2">
          <img
            className="flex rounded-full border-[1px] border-yellow-700 p-1  w-[150px] md:w-[90px]         "
            src="/me-modified.png"
          />
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              fill="#000"
              className="icon flat-line "
              data-name="Flat Line"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2CA9BC"
                strokeWidth="2"
                d="M21.37 12c0 1-.86 1.79-1.14 2.67s-.1 2.08-.65 2.83-1.73.94-2.5 1.49-1.28 1.62-2.18 1.92-1.9-.26-2.9-.26-2 .55-2.9.27S7.67 19.55 6.92 19s-1.92-.72-2.5-1.49-.35-1.92-.65-2.83S2.63 13 2.63 12s.86-1.8 1.14-2.68.1-2.08.65-2.83S6.15 5.56 6.92 5 8.2 3.39 9.1 3.09s1.93.27 2.9.27 2-.55 2.9-.27S16.33 4.46 17.08 5s1.94.72 2.5 1.49.35 1.92.65 2.83S21.37 11 21.37 12z"
              ></path>
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12L11 15 16 10"
              ></path>
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21.37 12c0 1-.86 1.79-1.14 2.67s-.1 2.08-.65 2.83-1.73.94-2.5 1.49-1.28 1.62-2.18 1.92-1.9-.26-2.9-.26-2 .55-2.9.27S7.67 19.55 6.92 19s-1.92-.72-2.5-1.49-.35-1.92-.65-2.83S2.63 13 2.63 12s.86-1.8 1.14-2.68.1-2.08.65-2.83S6.15 5.56 6.92 5 8.2 3.39 9.1 3.09s1.93.27 2.9.27 2-.55 2.9-.27S16.33 4.46 17.08 5s1.94.72 2.5 1.49.35 1.92.65 2.83S21.37 11 21.37 12z"
                data-name="primary"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5xl text-secondary">
            Software designer, founder,
            <br /> and amateur astronaut.
          </h1>
          <p className="font-normal text-lg text-third">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder <br /> and CEO of Planetaria, where we develop
            technologies that empower regular people to <br /> explore space on
            their own terms.
          </p>
          <div className="flex items-center justify-start  gap-5">
            {/* Instgram icon */}
            <a
              className="cursor-pointer"
              href="https://www.instagram.com/mahmoudelhosary_/"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#97979f"
                  fillRule="evenodd"
                  d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z"
                  clipRule="evenodd"
                ></path>
                <path fill="#97979f" d="M18 5a1 1 0 100 2 1 1 0 000-2z"></path>
                <path
                  fill="#97979f"
                  fillRule="evenodd"
                  d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 002.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 002.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 00-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 00-2.622 2.622zM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 00-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 001.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 001.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 00-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://github.com/mahmoudelhosarry"
              className="cursor-pointer"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 24 24"
                fill="#97979f"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-elhosary-776250313"
              className="cursor-pointer"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#97979f"
                  d="M6.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 10a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8zM11 19h1a1 1 0 001-1v-4.5c0-1.5 3-2.5 3-.5v5a1 1 0 001 1h1a1 1 0 001-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10a1 1 0 00-1-1h-1a1 1 0 00-1 1v8a1 1 0 001 1z"
                ></path>
                <path
                  fill="#97979f"
                  fillRule="evenodd"
                  d="M20 1a3 3 0 013 3v16a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h16zm0 2a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
