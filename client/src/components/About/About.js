import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";

function About() {
  return (
    <>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">GitRepo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jocelyn</td>
              <td>Jayjack</td>
              <td>RepoLinks</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Hayden</td>
              <td>Beck</td>
              <td>@</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Justin</td>
              <td>Lindsey</td>
              <td>@</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>JJ</td>
              <td>Espinoza</td>
              <td>@</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jason</td>
              <td>Carrazco</td>
              <td>@f</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default About;

