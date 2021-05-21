import React from "react";
import myImage from "../img/myImage.png";

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
                      {<p className="title-s">My Skills</p> }
                      {this.state.skills.map(skill => {
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
                      {this.state.about_me.map(content => {
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
                              href=""
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
                              href=""
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
                              href=""
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
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-facebook"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>


                     <div className='t'>

                        <div className='container'>
                          <div className='row mtn-40'>
                            <div className='col-6 md-3 text-center'>
                              <div className='counter-item'>
                                <h2 className='counter-number'>
                                  <div>
                                    <span>3</span>
                                    <span className='sr-only'>+</span>
                                  </div>


                                </h2>

                                <h2>Happy Clients</h2>

                              </div>
                            </div>

                          </div>

                        </div>

                     </div>


                       

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
