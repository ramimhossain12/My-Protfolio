import React from "react";
import imageOverlay from "../img/contact.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className=" tt paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf1"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full11">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left1" data-aos="fade-up">
                          {" "}
                          Reach Out To Me!😜😜
                        </h5>
                      </div>
                      <div className="more-info1">
                        <p className="lead" data-aos="fade-up">
                          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS
                          OPEN FOR ALL
                          <br />
                          I’m an FullStack Web And Mobile Application
                          Developer.Passionate by mobile technologies. | Open
                          Source Contributor 🔥 | Algorithms Expert🔥 |
                          Researcher🔰 | Problem Solver | Tech Writer ✍️ Whether
                          you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send me an email.
                        </p>
                        {
                          <ul class="list-ico" data-aos="fade-up">
                            <li>
                              <span class="ion-ios-location"></span> Dhanmondi
                              27 sukrabad 1209 , Dhaka Bangladesh
                            </li>
                            <li>
                              <span class="ion-ios-telephone"></span> (+880)
                              173---
                            </li>
                            <li>
                              <span class="ion-email"></span>{" "}
                              ramim.cse.info@gmail.com
                            </li>
                          </ul>
                        }
                      </div>
                      <div className="socials1" data-aos="fade-up">
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

                          <li>
                            <a
                              href=""
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

                    {/* <div className="col-md-6">
                      <img
                        className="profile-img"
                        src={process.env.PUBLIC_URL + "/images/pro.png "}
                      
                      ></img>
                    </div>
 */}

                    <div className="col-md-6" data-aos="slide-left">
                      <div className="title-box-2">
                        <h5 className="title-left1">Send A Message</h5>
                      </div>
                      <div className="pro">
                        <form
                          action="https://formspree.io/xdoeonlo"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box"></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
