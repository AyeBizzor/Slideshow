import React from "react";
import render1 from "../img/render.1.jpg";
import render3 from "../img/render.3.jpg";
import render4 from "../img/render.4.jpg";
import render5 from "../img/render.5.jpg";
import { FlechaIzquierda } from "../assets/FlechaIzquierda";
import { FlechaDerecha } from "../assets/FlechaDerecha";
import styled from "styled-components";

export const Slideshow = () => {
  return (
    <Container>
      <ContainerSlideshow>
      <Slider>
        <img src={render1} alt="not found" />
       
      </Slider>
      <Slider>
        <img src={render3} alt="not found" />
      
      </Slider>
      <Slider>
        <img src={render4} alt="not found" />
       
      </Slider>
      <Slider>
        <img src={render5} alt="not found" />
       
      </Slider>
      <Controles>
        <Boton>
          <FlechaIzquierda />
        </Boton>
        <Boton derecho>
          <FlechaDerecha />
        </Boton>
      </Controles>

      </ContainerSlideshow>
    </Container>
    
  );
};

const Container = styled.div`
position: relative;
`;

const ContainerSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Slider = styled.div`
min-width: 100%;
overflow: hidden;
transition: .3s ease all;
z-index: 10;
max-height: 150rem;
position: relative;

img {
  width: 100%;
  vertical-align: top;
}


`;
/* const SlideText = styled.div`
color: white;
background: black;
width: 100%
padding: 10px 60px;
text-align: center;
position: absolute;
bottom: 0;

@media screen and (max-width: 700px){
    position: relative;
}

`; */

const Controles= styled.div`
position: absolute;
top: 0;
z-index: 20;
width: 100%;
height: 100%;
pointer-events: none;

`
const Boton= styled.button`
pointer-events: all;
background: none;
border: none;
fill: rgba(0,0,0,.5);
outline: none;
width: 5rem;
height: 100%;
text-align: center;
position: absolute;
transition: .3s ease all;
&:hover{
    background: rgba(0,0,0,.2);
    path{
        fill: #fff;
    }
}



path{
    filter: ${props => props.derecho ? 'drop-shadow (-2px 0px 0px #fff)' : 'drop-shadow (2px 0px 0px #fff)'}
}

${props => props.derecho ? 'right: 0' : 'left:0' }

`
