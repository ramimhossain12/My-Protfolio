import React from "react";

class Eudcation extends React.Component {
  render() {
    return (
      <section id="exper" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Experiences</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card201" >
           
                  <i class="android fa fa-android"></i>

                  <h2 className="white">Android Developer</h2>
                 
                  <p>
                    Schmerz ihr was wirklichkeiten beifall mein wird was stunden
                    schmerz schatten. Erschüttert dunst wohl gezeigt jugendlich
                    ich, verschwand irrt herzen.
                  </p>
                  <h4 className="date">1-22-22</h4>
           
         
            </div>
            <div className="card201" >
              <i class=" apple fa fa-apple"></i>
              <h2 className="white"> iOS Developer</h2>
              <p>
                Schmerz ihr was wirklichkeiten beifall mein wird was stunden
                schmerz schatten. Erschüttert dunst wohl gezeigt jugendlich ich,
                verschwand irrt herzen.
              </p>
              <h4 className="date22">1-22-22</h4>
            </div>
            <div className="card201" >
              <img
                src={process.env.PUBLIC_URL + "/images/web.png "}
                alt="Mypic"
                width="50px"
              ></img>
              <h2 className="white">Front End Developer</h2>
              <p>
                Schmerz ihr was wirklichkeiten beifall mein wird was stunden
                schmerz schatten. Erschüttert dunst wohl gezeigt jugendlich ich,
                verschwand irrt herzen.
              </p>
              <h4 className="date">1-22-22</h4>
            </div>

            <div className="card201" >
              <img
                src={process.env.PUBLIC_URL + "/images/end.png "}
                alt="Mypic"
                width="50px"
              ></img>
              <h2 className="white">Back End Developer</h2>
              <p>
                Schmerz ihr was wirklichkeiten beifall mein wird was stunden
                schmerz schatten. Erschüttert dunst wohl gezeigt jugendlich ich,
                verschwand irrt herzen.
              </p>
              <h4 className="date">1-22-22</h4>
            </div>

            <div className="card201" >
              <img
                src={process.env.PUBLIC_URL + "/images/problem.png "}
                alt="Mypic"
                width="50px"
              ></img>
              <h2 className="white">Problem Solving</h2>
              <p>
                Schmerz ihr was wirklichkeiten beifall mein wird was stunden
                schmerz schatten. Erschüttert dunst wohl gezeigt jugendlich ich,
                verschwand irrt herzen.
              </p>
              <h4 className="date">1-22-22</h4>
            </div>
            <div className="card201" >
              <img
                src={process.env.PUBLIC_URL + "/images/dev.png "}
                alt="Mypic"
                width="50px"
              ></img>
              <h2 className="white">DevOps Engineering</h2>
              <p>
                Schmerz ihr was wirklichkeiten beifall mein wird was stunden
                schmerz schatten. Erschüttert dunst wohl gezeigt jugendlich ich,
                verschwand irrt herzen.
              </p>
              <h4 className="date">1-22-22</h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Eudcation;
