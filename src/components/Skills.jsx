import React from "react";

function Skills() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 w-screen mt-10 px-5">
        <div className=" flex flex-1 items-center justify-center flex-wrap">
          <div className="flex flex-col items-center">
            <img
              className="p-4"
              width={100}
              height={100}
              src="https://cdn3.iconfinder.com/data/icons/industries-o-z/64/8._Software_development_computer_front_end_back_end_programming-512.png"
              alt=" frontend"
            />
            <h2 className="text-3xl font-bold pb-4">Frontend Developer</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>

            <h2 className="font-semibold text-xl text-blue-500 pb-2">Languages I speak:</h2>
            <h3 className="text-center">
              {" "}
              HTML, <br /> CSS, <br />
              Javacript, <br />
              React Js,
              <br /> Next JS, <br />
              React Native
            </h3>
          </div>
        </div>

        <div className=" flex flex-1 items-center justify-center flex-wrap">
          <div className="flex flex-col items-center">
            <img
              className="p-1"
              width={100}
              height={100}
              src="https://cdn3.iconfinder.com/data/icons/web-mobile-development/100/development_web_coding_code_programming_mobile_backend-512.png"
              alt=""
            />
            <h2 className="text-3xl font-bold pb-4">Backend Developer</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>

            <h2 className="text-xl font-semibold text-blue-500 pb-2">Languages I speak:</h2>
            <h3 className="text-center">
              {" "}
              Node js, <br /> Express Js <br /> FastAPI <br /> Postgres Sql{" "}
              <br /> MongoDB <br />{" "}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center flex-wrap">
          <div className="flex flex-col items-center">
            <img
              className="p-1"
              width={70}
              height={70}
              src="https://cdn2.iconfinder.com/data/icons/app-developement/110/Code_Setting-256.png"
              alt=""
            />
            <h2 className="text-3xl font-bold pb-4">Tools</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>

            <h2 className="text-xl font-semibold text-blue-500 pb-2">Languages I speak:</h2>
            <h3 className="text-center">
              {" "}
              AWS, <br /> Docker, <br /> Vs code, <br /> Git <br /> GitHub{" "}
              <br /> GitLab <br /> Argo Gitops <br /> Ngix{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
