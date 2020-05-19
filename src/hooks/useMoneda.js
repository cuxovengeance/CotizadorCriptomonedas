import React, {Fragment, useState} from "react";
import styled from "@emotion/styled";

const LabelStyled = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const SelectStyled = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useMoneda = (label, stateInicial, opciones) => {
    /*Aquí va el State y las operaciones que queramos hacer*/

    /*State del Custom Hook*/
    const [state, updateState] = useState(stateInicial);

    /*Aquí dentro va todo lo que se muestra en pantalla*/
    const Selectionar = () => (
        <Fragment>
            <LabelStyled> {label} </LabelStyled>
            <SelectStyled
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione -- </option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}

            </SelectStyled>
        </Fragment>
    );

    /*Retornar state, interfaz y función que modifica el State*/
    return [state, Selectionar, updateState];
}

export default useMoneda;
