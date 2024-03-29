import React from 'react'
import Background from "../assets/Usama_Background.png";
import { Link } from 'react-router-dom';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Example from "../assets/Replace.jpg";


const Home = () => {
  return (
    <div className="mt-40 ml-10">
      {/*try to figure out how to make the background transparent*/}
      {/* <img
          className="relative bg-cover h-screen w-screen overflow-hidden"
          src={Background}
          alt="Profile"
        /> */}
      <img
        className="w-80 h-80 float-right mr-10 ml-32 rounded-2xl"
        src={Example}
        alt="Profile"
      />

      <div>
        <h1 className="text-5xl mb-5 font-bold">Hi, I'm Usama Mohiuddin</h1>
        <h2 className="text-3xl text-blue-500 mb-10">Full Stack Developer</h2>
        <p className="text-lg mb-5">
          As a Full Stack Developer, I specialize in crafting seamless web
          experiences that are both user-friendly and efficient. With a strong
          foundation in both front-end and back-end technologies, I deliver
          complete solutions that drive business success. My passion for
          technology and continuous learning keeps me at the forefront of the
          latest industry trends and best practices.
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1Ks0-ltYjCa-97rzsB3-nhkj9XZqK10i8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline bg-blue-500 border-blue-500 text-black mr-3">
              RESUME
            </button>
          </a>

          <Link to="/projects">
            <button className="btn btn-outline border-blue-500 text-blue-500">
              Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-outline border-blue-500 text-blue-500 ml-3">
              Connect with Me
            </button>
          </Link>
        </div>
        <div className="flex justify-end mt-10 mr-10 ">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}

export default Home