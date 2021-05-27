import "./style.css";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Do() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./of.json"),
    });
  }, []);

  return (
    <section id="education1" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 h3 className="title-a">
                {" "}
                What i do{" "}
              </h3>
              <p className="subtitle-a">
                CRAZY FULL STACK Software DEVELOPER WHO WANTS TO EXPLORE EVERY
                TECH STACK
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="zoom-in-down">
          <div className="container1" ref={container}>
            {" "}
          </div>

          <div className="tp1">
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/java.png "}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/kotlin.png "}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/js.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/css.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/html.png "}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/npm.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/android.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/swift.png "}
              alt="Mypic"
              width="50px"
            ></img>

            <br></br>

            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/python.png "}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/vue.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/git.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/flutter.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/django.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/docker.png"}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/react.png "}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/php.png "}
              alt="Mypic"
              width="50px"
            ></img>

            <br></br>

            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/node.png "}
              alt="Mypic"
              width="50px"
            ></img>

            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/sql.png "}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/mysql.png "}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/firebase.png "}
              alt="Mypic"
              width="50px"
            ></img>

            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/mongodb.png "}
              alt="Mypic"
              width="50px"
            ></img>
            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/aws.png "}
              alt="Mypic"
              width="50px"
            ></img>

            <img
              className="tp"
              src={process.env.PUBLIC_URL + "/images/apple.png "}
              alt="Mypic"
              width="50px"
            ></img>
          </div>
          <div className="card34">
            <p>
              ⚡ Develop highly interactive Front end / User Interfaces for your
              web and mobile applications
            </p>
            <p>
              ⚡ Progressive Andorid Applications ( PWA ) in normal and SPA
              Stacks
            </p>
            <p>
              ⚡ Integration of third party services such as Firebase/ AWS /
              Digital Ocean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
