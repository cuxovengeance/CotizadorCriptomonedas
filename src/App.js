import React from 'react';
import styled from "@emotion/styled";
import imagen from "./img/cryptomonedas.png"
import Formulario from "./Components/content/Formulario/Formulario";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr); /*creamos dos columnas dentro del grid*/
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  
  &:after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {
  return (
      <Contenedor>

          {/*Div para la imagen*/}
        <div>
            <Imagen
                src={imagen}
                alt="imagen Cripto"/*texto alternativo*/
            />
        </div>

          <div>
              <Heading> Cotiza Criptomonedas Al Instante</Heading>

              <Formulario/>
          </div>

      </Contenedor>
  );
}

export default App;
