import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {

  return (
    <div className="container p-2 mt-2 ">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="">
            <h5 className="text-light display-6">Hi, my name is</h5>
            <h1 className="display-5">
                ESWAR
            </h1>
            <h2 className="display-6">
              I'm a Full-stack Developer.
            </h2>
            <p className="text-bold">
              I’m a Frontend/Full-stack developer specializing in building and
              designing exceptional digital experiences. Seeking a role as a
              front-end developer in a reputed organization where I can learn new
              skills, expand my knowledge, and leverage my learnings. Currently, I’m
              focused on building responsive User interface.
            </p>
            <div>
          <button className="">
            <a
              href="https://drive.google.com/file/d/1Z6DYsh-SGfXUNJH9sVAVSOxW77NjSQOS/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className='link-secondary'
            >
              <span className='text-dark'>View certificate</span>
            </a>
            <span>
              <a
                href="https://drive.google.com/file/d/1Z6DYsh-SGfXUNJH9sVAVSOxW77NjSQOS/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className='link-dark'
              >
                <HiArrowNarrowRight className="ml-3" />
              </a>
            </span>
          </button>
        </div>
          </div>
        
      </div>
      
    </div>
    </div >
  );
};

export default Home;