import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title  mb-4">
                Hello, I'm Ramim Hossain
                <span role="img" aria-label="Panda">
                  👋
                </span>
              </h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Software Engineer",
                      "Moblie Application Developer",
                      "Front End Developer",
                      "Back End Developer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-danger btn  js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  <span role="img" aria-label="Panda">
                    🎉
                  </span>
                  View My Work
                </a>
                <a
                  className=" btn btn-secondary  ml-2 js-scroll px-4  "
                  href="#Home"
                  role="button"
                >
                  <span role="img" aria-label="Panda">
                    👍
                  </span>
                  See My Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
