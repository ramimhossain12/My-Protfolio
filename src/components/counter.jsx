import React, { Component } from 'react'

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
  if (count1 == 50) {
    clearInterval(project);
  }
}

function happyClients() {
  count2++;
  document.querySelector("#number2").innerHTML = count2;
  if (count2 == 89) {
    clearInterval(clients);
  }
}

function cupsCoffee() {
  count3++;
  document.querySelector("#number3").innerHTML = count3;
  if (count3 == 359) {
    clearInterval(coffee);
  }
}
function trpy2() {
  count4++;
  document.querySelector("#number4").innerHTML = count4;
  if (count4 == 20) {
    clearInterval(tropy);
  }
}


 
 
 
export class counter extends Component {
    render() {
        return (
          <section id="progress" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">Education</h3>
                    <p className="subtitle-a">
                      Incididunt nostrud id aute culpa excepteur pariatur
                      consequat elit culpa nulla enim anim incididunt.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>

              <div class="project-counter-wrp">
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

export default counter

