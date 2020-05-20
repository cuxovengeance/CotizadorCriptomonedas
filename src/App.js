import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import Axios from "axios";
import imagen from "./img/cryptomonedas.png"
import Formulario from "./Components/content/Formulario/Formulario";
import Cotizacion from "./Components/content/Cotizacion/Cotizacion";
import Spinner from "./Components/graphic/Spinner";


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

    /*State para leer la cotización y enviar los props hacia el resultado*/
    const [moneda, saveMoneda] = useState('');
    const [criptomoneda, saveCriptomoneda] = useState('');

    /*State para captar el resultado*/
    const [resultado, saveResultado] = useState({});

    /*State Spinner*/
    const [load, setLoad] = useState(false);

    /*useEffect para hacer el calculo */
    useEffect(() => {
        const cotizarCallAPI = async () => {
            /*Prevenir primera ejecución*/
            if(moneda === '' || criptomoneda === '') return;

            /*Consultar la API para obtener la cotización*/
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
            const resultado = await Axios.get(url);

            /*Mostrar Spinner*/
            setLoad(true);

            /*Ocultar Spinner y Mostrar Resultado*/
            setTimeout(() => {
                /*Cambiar el State del estado de Load*/
                setLoad(false);

                /*Guardar Cotización*/
                saveResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
            }, 3000)
        }
        cotizarCallAPI();
    },[moneda, criptomoneda])

    /*Mostrar Spinner o Resultado*/
    const componente = (load) ? <Spinner/> : <Cotizacion resultado={resultado}/>
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

              <Formulario
                  saveMoneda={saveMoneda}
                  saveCriptomoneda={saveCriptomoneda}
              />

              {componente}

          </div>

      </Contenedor>
  );
}

export default App;
