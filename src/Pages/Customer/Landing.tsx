import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LandingVideo from "../videos/land.mp4";
// import Logo from "../assets/logo.png"; // Adjust if needed

const Landing: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEnded = () => {
      navigate("/login");
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, [navigate]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src={LandingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col bg-black bg-opacity-0 text-center px-8">
        {/* <div className="flex justify-right -mt-0 mb-0 pt-60 items-center justify-center">
             <img src={Logo} alt="LankaCom" className="h-full" />
        </div> */}


        <h1 className="text-white text-6xl sm:text-6xl md:text-6xl font-bold font-jura animate-glow-text justify-center items-center text-center pt-80">
           Cyber Security Support Portal
        </h1>
        <h1 className="text-white text-4xl sm:text-4xl md:text-4xl font-bold font-jura animate-glow-text justify-center items-center text-center pt-10">
           Lanka Communication Services pvt Ltd
        </h1>
      </div>
    </div>
  );
};

export default Landing;
