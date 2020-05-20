import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import useMoneda from "../../../hooks/useMoneda";
import useCriptomoneda from "../../../hooks/useCriptomoneda";
import Error from "../../error/Error";
import Axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66A2FE;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s ease;
  
  &:hover{
    background-color: #326AC0;
    cursor: pointer;
  }
`;

const Formulario = ({saveMoneda,saveCriptomoneda}) => {
    /*State para listado de Criptomonedas*/
    const [listadoCripto, getListadoCripto] = useState([]);

    /*State para validar formulario y manejar error*/
    const [error, setError] = useState(false);

    /*Arreglo de monedas*/
    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
        {codigo: 'CLP', nombre: 'Peso Chileno'},
    ]

    /*Utilizar useMoneda*/
    const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda', '', MONEDAS);

    /*Utilizar useCriptomoneda*/
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listadoCripto);

    /*Ejecutar llamado a la API para mostrar Criptomonedas a elegir*/
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await Axios.get(url);
            getListadoCripto(resultado.data.Data);
        }
        consultarAPI();
    },[]);

    /*Cuando el usuario haga submit*/
    const cotizarMoneda = e => {
        e.preventDefault();

        /*Validar si ambos campos estan llenos*/
        if(moneda === '' || criptomoneda === '') {
            setError(true);
            return;
        }

        /*caso contrario: pasar datos al componente principal*/
        setError(false);
        saveMoneda(moneda);
        saveCriptomoneda(criptomoneda);
    }

    return(
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos Son OBLIGATORIOS"/>
            : null}
            <SelectMoneda/>

            <SelectCripto/>

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
};

export default Formulario;
