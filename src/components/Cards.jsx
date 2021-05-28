import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../assets/1st.jpg";
import img2 from "../assets/2nd.jpg";
import img3 from "../assets/3rd.jpg";
import img4 from "../assets/4th.jpg";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="acivment" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Achievements And Certifications </h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
            <div className="col-md-3" >
              <Card imgsrc={img1} title="iOS Developer" />
            </div>
            <div className="col-md-3" >
              <Card imgsrc={img2} title="Android Developer" />
            </div>
            <div className="col-md-3" >
              <Card imgsrc={img3} title="React Developer" />
            </div>
            <div className="col-md-3">
              <Card imgsrc={img4} title="Typing Speed" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Cards;
