import React from "react";


//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Open Source Projects</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="zoom-in-up">
            <div className="work-box">
              <a href="https://github.com/ramimhossain12">
                <i class="project fa fa-book"></i>

                <h2 className="white">developerFolio</h2>

                <p className="prject-des">
                  🚀 Software Developer Portfolio Template that helps you
                  showcase your work and skills as a software developer...
                </p>
                <li className="project-langu">
                  {" "}
                  JavaScript-Contribution 8-Start 10
                </li>
              </a>
            </div>

            <div className="work-box">
              <a href="https://github.com/ramimhossain12">
                <i class="project fa fa-book"></i>

                <h2 className="white">Coffee order Apps</h2>

                <p className="prject-des">
                  🚀 Software Developer Portfolio Template that helps you
                  showcase your work and skills as a software developer...
                </p>
                <li className="project-langu">
                  {" "}
                  Java+Kotlin-Contribution 8-Start 10
                </li>
              </a>
            </div>
            <div className="work-box">
              <a href="https://github.com/ramimhossain12">
                <i class="project fa fa-book"></i>

                <h2 className="white">School Management System App</h2>

                <p className="prject-des">
                  🚀 Software Developer Portfolio Template that helps you
                  showcase your work and skills as a software developer...
                </p>
                <li className="project-langu">
                  {" "}
                  Kotlin-Contribution 8-Start 10
                </li>
              </a>
            </div>
            <div className="work-box">
              <a href="https://github.com/ramimhossain12">
                <i class="project fa fa-book"></i>

                <h2 className="white">University Daily Schedular Apps</h2>

                <p className="prject-des">
                  🚀 Software Developer Portfolio Template that helps you
                  showcase your work and skills as a software developer...
                </p>
                <li className="project-langu"> Java-Contribution 8-Start 10</li>
              </a>
            </div>
            <div className="work-box">
              <a href="https://github.com/ramimhossain12">
                <i class="project fa fa-book"></i>

                <h2 className="white">Java oop online Book App</h2>

                <p className="prject-des">
                  🚀 Software Developer Portfolio Template that helps you
                  showcase your work and skills as a software developer...
                </p>
                <li className="project-langu"> Java-Contribution 3-Start 13</li>
              </a>
            </div>
            <div className="work-box">
              <a href="https://github.com/ramimhossain12">
                <i class="project fa fa-book"></i>

                <h2 className="white">Chat App</h2>

                <p className="prject-des">
                  🚀 Software Developer Portfolio Template that helps you
                  showcase your work and skills as a software developer...
                </p>
                <li className="project-langu">
                  {" "}
                  JavaScript-Contribution 8-Start 10
                </li>
              </a>
            </div>

            <div className="btnpro">
              <a
                href="https://github.com/ramimhossain12"
                className="btn btn-outline-danger"
              >
                {" "}
                😊 More Project
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
