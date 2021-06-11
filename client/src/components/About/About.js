import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function About() {
  return (
    <>
      <div className="jumbo">
        <h1>Team Members of Eats Around Me</h1>
        <p>A Great Cast of Food Lovers</p>
        <a href="/Search">{"search for good food"}</a>
      </div>

      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">React Portfolio</th>
              <th scope="col">GitHub Repository</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jocelyn</td>
              <td>Jayjack</td>
              <td>
                <a href="https://jjayjack.github.io/React_Portfolio/#/">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={"https://github.com/jjayjack"}>{"GitHub Account"}</a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Hayden</td>
              <td>Beck</td>
              <td>
                <a href="https://portfolioredeux.herokuapp.com">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={"https://github.com/haydenabeck"}>
                  {"GitHub Account"}
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Justin</td>
              <td>Lindsey</td>
              <td>
                <a href="https://justicegtr.github.io/PortfolioWebsiteReact/">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={"https://github.com/JusticeGTR"}>{"GitHub Account"}</a>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>JJ</td>
              <td>Espinoza</td>
              <td>
                <a href="https://frozen-harbor-45051.herokuapp.com/">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={"https://github.com/0117Javi"}>{"GitHub Account"}</a>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jason</td>
              <td>Carrazco</td>
              <td>
                <a href="https://jac61090.github.io/midnight-react-profile/#/">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={""}>{"GitHub Account"}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default About;
