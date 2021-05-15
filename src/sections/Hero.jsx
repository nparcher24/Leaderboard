import "./Hero.css";
import Typing from "react-typing-animation";
import React from "react";
import Fade from "react-awesome-reveal";

function ExampleStart(props) {
  return (
    <div className=" bg-gray-800 relative h-96">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* <img
          className="w-full h-full object-cover object-top"
          src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/fitfo%20w2.jpg?alt=media&token=137a3584-8fe8-4b83-9087-8539c25d158e"
          alt=""
        /> */}
        {/* <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/Website%20video%202.mov?alt=media&token=57e8b109-0fcb-428c-b27b-357b7c2ee393"
            type="video/mp4"
          />
        </video> */}
        {/* <div class="video-background">
          <iframe
            src="https://youtube.com/embed/Prfu0hmAh58?playlist=Prfu0hmAh58&loop=1&autoplay=1&mute=1&controls=0&modestbranding=1&autohide=1&showinfo=0"
            title="YouTube video player"
            allowFullScreen
            frameborder="0"
          />
        </div> */}

        <div class="iframe-container">
          <div id="player"></div>
        </div>

        <div
          className="absolute inset-0 bg-gray-800 opacity-70"
          style={{ mixBlendMode: "multiply" }}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
        {console.log("Redrawn")}

        <Typing>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {props.title}
          </h1>
        </Typing>
        <Fade delay={2000} triggerOnce>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            {props.description}
          </p>
          <a
            className="inline-flex mt-5 items-center px-10 py-2 border border-transparent shadow-sm text-base font-bold rounded-md text-black bg-secondaryTan focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-80"
            href="https://www.eventcreate.com/e/hero-brock"
            // onClick={() => {
            //   if (!props.isSignedIn) {
            //     props.setDisplaySignIn(true);
            //   } else {
            //     props.setShowAccount(true);
            //   }
            // }}
          >
            Learn more
            {/* <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" /> */}
          </a>
        </Fade>
      </div>
    </div>
  );
}

export const Hero = React.memo(ExampleStart);
