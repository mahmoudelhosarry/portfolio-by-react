const Footer = () => {
  return (
    <footer className="flex  flex-col mx-auto items-center gap-y-4 md:justify-between md:flex-row w-4/5 mt-5 py-10">
      <div>
        <ul className="flex gap-5  p-style ">
          <li className="cursor-pointer ">
            <a></a>
            About
          </li>
          <li className="cursor-pointer ">
            <a></a>
            Projects
          </li>
          <li className="cursor-pointer ">
            <a></a>
            Speaking
          </li>
          <li className="cursor-pointer ">
            <a></a>
            Uses
          </li>
        </ul>
      </div>
      <p className="font-light text-base text-third">
        © 2024 Spencer Sharp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
