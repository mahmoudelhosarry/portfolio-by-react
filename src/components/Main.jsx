// hover:border-yellow-700
import { useState } from "react";
const myProjects = [
  {
    category: ["js", "all"],
    projectName: "Dice Challenge",
    pic: "/player.png",
    link: "https://mahmoudelhosarry.github.io/Dice-challenge/",
    github: "https://github.com/mahmoudelhosarry/Dice-challenge",
  },
  {
    category: ["tailwend", "all"],
    projectName: "Avatar",
    pic: "/avatar.png",
    link: "https://mahmoudelhosarry.github.io/tailwend-project/",
    github: "https://github.com/mahmoudelhosarry/tailwend-project",
  },

  {
    category: ["js", "html", "css", "all"],
    projectName: "cruds",
    pic: "/cruds.png",
    link: "https://mahmoudelhosarry.github.io/CRUDS/",
    github: "https://github.com/mahmoudelhosarry/CRUDS",
  },
];
const Main = () => {
  const [border, setborder] = useState(false);
  const [sort, setSort] = useState(myProjects);
  return (
    <div
      id="main"
      className="  flex flex-col sm:flex-row  gap-x-10  w-full md:w-4/5 mx-auto mt-5"
    >
      <div className="  flex flex-wrap justify-center md:flex-col md:justify-start content-start gap-y-1 mb-5 ">
        <button
          onClick={() => {
            setborder("all");
            const all = myProjects.filter((project) => {
              return project.category.includes("all");
            });
            setSort(all);
          }}
          className={`${border === "all" ? "hover2" : "null"} button-style`}
        >
          all projects
        </button>
        <button
          onClick={() => {
            setborder("css");
            const css = myProjects.filter((project) => {
              return project.category.includes("css");
            });
            setSort(css);
          }}
          className={`${border === "css" ? "hover2" : "null"} button-style`}
        >
          html & css
        </button>
        <button
          onClick={() => {
            setborder("tailwend");
            const tailwend = myProjects.filter((project) => {
              return project.category.includes("tailwend");
            });
            setSort(tailwend);
          }}
          className={`${
            border === "tailwend" ? "hover2" : "null"
          } button-style`}
        >
          tailwend
        </button>
        <button
          onClick={() => {
            setborder("js");
            const js = myProjects.filter((project) => {
              return project.category.includes("js");
            });
            setSort(js);
          }}
          className={`${border === "js" ? "hover2" : "null"} button-style`}
        >
          javascript
        </button>
      </div>
      <div className="   flex flex-wrap  gap-x-3 gap-y-5 justify-center mx-auto  ">
        {sort.map((item) => {
          return (
            <div
              key={item.pic}
              className=" border-backgroundColor border-2 hover:border-[#3b82f680]  hover:cursor-pointer   bg-gradient-to-r from-[#ffffff0d] to-[#ffffff10] rounded-2xl hover:scale-105 hover:border-yellow-700"
            >
              <img
                src={item.pic}
                className=" mx-auto rounded-2xl border-2 border-backgroundColor hover:border-yellow-700  w-36 sm:w-56 "
              />
              <div className="px-2 w-36 sm:w-56  ">
                <h1 className="h-style mt-3">{item.projectName}</h1>
                <p className="p-style mb-4 break-words">
                  facascascacaasascsacascacacsascasc
                </p>

                <div className="flex gap-3 mb-2">
                  <a href={item.link}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      fill="#97979f"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#97979f"
                        d="M7.05 1.536a5.243 5.243 0 017.414 7.414L12.415 11 11 9.586l2.05-2.05A3.243 3.243 0 008.464 2.95L6.414 5 5 3.586l2.05-2.05zM7.536 13.05L9.586 11 11 12.414l-2.05 2.05A5.243 5.243 0 011.536 7.05L3.586 5 5 6.414l-2.05 2.05a3.243 3.243 0 004.586 4.586z"
                      ></path>
                      <path
                        fill="#97979f"
                        d="M5.707 11.707l6-6-1.414-1.414-6 6 1.414 1.414z"
                      ></path>
                    </svg>
                  </a>
                  <a href={item.github}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      viewBox="0 0 24 24"
                      fill="#97979f"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
