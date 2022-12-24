import React from 'react';

const About = () => {
  return (
    <div className="container p-2 mt-2 ">
      <div className="row">
        <div className="col-sm-12">
          <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                  <h4 className="b-line">
                    About
                  </h4>
                </div>
                <div></div>
              </div>
              <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="text-bolder">
                  <p>Hi. I'm Eswar, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                  <p>
                    I am an young aspirant Front end developer, who is passionate
                    about building excellent software that improves the lives of those
                    around me. Currently I am looking for a Full time Job opportunity
                    where I can learn new skills, expand my knowledge, and leverage my
                    learnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;