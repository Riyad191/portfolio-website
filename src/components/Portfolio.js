import React, { Component } from "react";
import "../App.css";
// import Pic1 from "./img/codespire.PNG";
// import Pic2 from "./img/mancity.PNG";
// import Pic3 from "./img/hex.PNG";
// import Pic4 from "./img/todo.PNG";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                broder: "solid 1px red",
              }}
            >
              {/* {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="https://the-hex-game.herokuapp.com/">
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })} */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  textAlign: "center",
                  width: 1800,
                }}
              >
                <a
                  className="hero--projects"
                  href="https://the-hex-game.herokuapp.com/index.html "
                  target="_blank"
                >
                  {" "}
                  <p
                    style={{
                      border: "solid white 6px",
                      padding: "15px 15px 20px 15px",
                      margin: "1px 0 0 0 ",
                      color: "white",
                    }}
                  >
                    project 1
                  </p>
                </a>
                <a
                  className="hero--projects"
                  href="https://code-spire.herokuapp.com/"
                  target="_blank"
                >
                  <p
                    style={{
                      border: "solid white 6px",
                      padding: "15px 15px 20px 15px",
                      margin: "1px 0 0 0 ",
                      color: "white",
                    }}
                  >
                    project 2
                  </p>
                </a>
                <a
                  className="hero--projects"
                  href="https://manchester--city.herokuapp.com/"
                  target="_blank"
                >
                  <p
                    style={{
                      border: "solid white 6px",
                      padding: "15px 15px 20px 15px",
                      margin: "1px 0 0 0 ",
                      color: "white",
                    }}
                  >
                    project 3
                  </p>
                </a>
                <a
                  className="hero--projects"
                  href="https://the--todo--app.herokuapp.com/"
                  target="_blank"
                >
                  <p
                    style={{
                      border: "solid white 6px",
                      padding: "15px 15px 20px 15px",
                      margin: "1px 0 0 0 ",
                      color: "white",
                    }}
                  >
                    project 4
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
