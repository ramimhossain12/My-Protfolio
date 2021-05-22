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
              <h1 className="intro-title mb-4">Hello, I'm Ramim Hossain👋</h1>
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
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                 🎉 View My Work
                </a>
                <a
                  className="btn2 btn-dark btn js-scroll px-4"
                  href="https://drive.google.com/file/d/1RVWJ2Tlg7tN2FSK5LPJGeF_yDC-IlfSV/view?usp=sharing"
                  role="button"
                >
                  👍 See My Resume
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