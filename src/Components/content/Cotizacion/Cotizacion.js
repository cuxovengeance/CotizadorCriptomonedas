import React from "react";
import styled from "@emotion/styled";

const ContenedorResultado = styled.div`
  color: #FFF;
  font-family: Arial, "Helvetica Neue", sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  
  /*esto es para cambiar el estilo de los span que estan 
  dentro del parrafo editado sin tener que hacer un span styled a parte*/
  span{
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({resultado}) => {
    /*Esto es para que no se ejecute este componente si el objeto que
    * recibe y que acabo de inyectar viene vacio*/
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado);

    return(
        <ContenedorResultado>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>El precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ContenedorResultado>
    );
};

export default Cotizacion;
