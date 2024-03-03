import React from "react";

function Skills() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-10">
        <div className=" flex flex-1 items-center justify-center flex-wrap">
          <div className="flex flex-col items-center">
            <img src="" alt="" />
            <h2 className="text-3xl font-bold pb-4">Frontend Developer</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>

            <h2 className="font-semibold text-xl">Languages I speak:</h2>
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
            <img src="" alt="" />
            <h2 className="text-3xl font-bold pb-4">Backend Developer</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>

            <h2 className="text-xl font-semibold">Languages I speak:</h2>
            <h3 className="text-center">
              {" "}
              Node js, <br /> Express Js <br /> FastAPI <br /> Postgres Sql{" "}
              <br /> MongoDB <br />{" "}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center flex-wrap">
          <div className="flex flex-col items-center">
            <img src="" alt="" />
            <h2 className="text-3xl font-bold pb-4">Tools</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>

            <h2 className="text-xl font-semibold">Languages I speak:</h2>
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
