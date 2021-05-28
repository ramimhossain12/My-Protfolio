
import React from "react";

var project = setInterval(projectDone, 10);
var clients = setInterval(happyClients, 10);
var coffee = setInterval(cupsCoffee, 10);
var tropy = setInterval(trpy2, 10);

let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function projectDone() {
  count1++;
  document.querySelector("#number1").innerHTML = count1;
  if (count1 === 50) {
    clearInterval(project);
  }
}

function happyClients() {
  count2++;
  document.querySelector("#number2").innerHTML = count2;
  if (count2 === 89) {
    clearInterval(clients);
  }
}

function cupsCoffee() {
  count3++;
  document.querySelector("#number3").innerHTML = count3;
  if (count3 === 359) {
    clearInterval(coffee);
  }
}
function trpy2() {
  count4++;
  document.querySelector("#number4").innerHTML = count4;
  if (count4 ===20) {
    clearInterval(tropy);
  }
}


 
 
 




class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Java_skill", content: "JAVA STACK", porcentage: "95%", value: "80" },
        { id: "Kotlin_skill", content: "KOTLIN STACK", porcentage: "85%", value: "80" },
        { id: "Dart_skill", content: "DART STACK", porcentage: "90%", value: "80" },






        
        {
          id: "JavaScript_skill",
          content: "JAVA SCRIPT STACK",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP STACK", porcentage: "70%", value: "70" },
         
        {
          id: "Python_skill",
          content: "PYTHON STACK",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Android_skill",
          content: "NATIVE ANDROID DEVELOPMENT",
          porcentage: "95%",
          value: "75"
        },
        {
          id: "ios_skill",
          content: "NATIVE iOS DEVELOPMENT",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Cross_skill",
          content: "CROSS PLATFORM MOBILE APPS",
          porcentage: "85%",
          value: "75"
        },
        {
          id: "Database_skill",
          content: "DATABASE DESIGN & ADMINISTRATIO",
          porcentage: "85%",
          value: "75"
        },
        {
          id: "DEVOPS_skill",
          content: "DEVOPS",
          porcentage: "80%",
          value: "75"
        },


        {
          id: "Front_skill",
          content: "FRONT END DEVELOPER",
          porcentage: "85%",
          value: "75"
        },

        {
          id: "Back_skill",
          content: "BACK END DEVELOPER",
          porcentage: "90%",
          value: "75"
        },





        
        
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
             "I am passionate Software Engineer/ Developer 🚀 having an experience of building Game and Mobile applications with Unity/ Android / iOS / React Native /Flutter and some other cool libraries and frameworks.I got the raw software development related skill to shift myself in any gear.I am a passionate tech lover & problem solver always ready to face new challenges.🔰"
        },
         
        
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {<p className="title-s">My Skills</p>}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}

                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="#home"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-codepen"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/ramimhossain12"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/ramim-hossain-190ab217a/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://www.facebook.com/hartless.hirdoy/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-facebook"></i>
                              </span>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://twitter.com/RamimHo92163398"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-twitter"></i>
                              </span>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://www.instagram.com/ramimhossain11/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>

                          <li className="icon">
                            <a
                              href="#home"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-youtube"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="  project-counter-wrp">
            <ul>
              <li>
                <i class="fa fa-briefcase"></i>
                <p id="number1" class="number">
                  50
                </p>
                <span></span>
                <p>Projects Done</p>
              </li>
              <li>
                <i class="fa fa-smile-o"></i>
                <p id="number2" class="number">
                  89
                </p>
                <span></span>
                <p>Happy Clients</p>
              </li>
              <li>
                <i class="fa fa-coffee"></i>
                <p id="number3" class="number">
                  359
                </p>
                <span></span>
                <p>Cups of Coffee</p>
              </li>
              <li>
                <i class="fa fa-trophy"></i>
                <p id="number4" class="number">
                  20
                </p>
                <span></span>
                <p>Winner</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
