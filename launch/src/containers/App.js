import React, { Component } from "react";
import styled from "styled-components";
import { WorkingFlipDate } from "../components/flip";

const Back = styled.img`
  content: url("https://res.cloudinary.com/dpykpv9hd/image/upload/v1628911407/knzvi2vylmvawqnbtcnd.png");
  width: 100%;
  height: auto;
  margin-top: -60px;
  margin-bottom: -70px;
`;

export default class App extends Component {
  render() {
    return (
      <section className="coming-soon">
        <div>
          <h2>En construcción</h2>
          <h1>estará disponible en:</h1>
          <div className="countdown">
            <WorkingFlipDate value={"2021-08-21T23:59:59"} />
          </div>
          <Back />
        </div>
      </section>
    );
  }
}
