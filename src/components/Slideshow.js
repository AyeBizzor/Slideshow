import React, { useRef } from "react";
import render1 from "../img/render.1.jpg";
import render3 from "../img/render.3.jpg";
import render4 from "../img/render.4.jpg";
import render5 from "../img/render.5.jpg";
import { FlechaIzquierda } from "../assets/FlechaIzquierda";
import { FlechaDerecha } from "../assets/FlechaDerecha";
import styled from "styled-components";

export const Slideshow = () => {

  const slideeshow = useRef(null)


  const siguiente = () => {

    if(slideeshow.current.children.length > 0){
      //Voy a obtener el primer elemento
      const primerElemento = slideeshow.current.children[0];
      //Con esto puedo establcer la transicion del slide
      slideeshow.current.style.transition='300ms ease-in-out';
      //Antes de moverlo, debería conseguir el recorrido que debe hacer el slide
      const tamañoSlide= slideeshow.current.children[0].offsetWidth;
      //Muevo el slide
      slideeshow.current.style.transform=`translateX(-${tamañoSlide}px)`;

      const transicion = () => {
      // Reiniciamos la posicion del Slideshow.
				slideeshow.current.style.transition = 'none';
				slideeshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideeshow.current.appendChild(primerElemento);

				slideeshow.current.removeEventListener('transitionend', transicion);
			}

			// Eventlistener para cuando termina la animacion.
			slideeshow.current.addEventListener('transitionend', transicion);


      
    }

    //console.log(slideeshow.current)
    // Tengo que acceder al ContainerSlideshow que tiene las imagenes. Con console.log(slideeshow) notás que muestra un current!! entonce con slideeshow.current accedo a la imagen


  }

  const anterior = () => {
    console.log('anterior')
  }





  return (
    <Container>
       <Controles>
        <Boton  onClick={anterior} >
          <FlechaIzquierda />
        </Boton>
        <Boton derecho onClick={siguiente}   >
          <FlechaDerecha />
        </Boton>
      </Controles>

      <ContainerSlideshow   ref={slideeshow}   >

     
      
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
  height: 100%
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

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  z-index: 30;
  fill: rgba(0, 0, 0, 0.5);
  outline: none;
  width: 5rem;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    path {
      fill: #fff;
    }
  }



path{
    filter: ${props => props.derecho ? 'drop-shadow (-2px 0px 0px #fff)' : 'drop-shadow (2px 0px 0px #fff)'}
}

${props => props.derecho ? 'right: 0' : 'left:0' }

`
