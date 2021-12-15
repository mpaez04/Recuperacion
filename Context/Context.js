import React, { createContext, useState, useEffect } from 'react';
export const Context = createContext();

const ContextProvider = (props) => {
    const [apidia, setapidia ] = useState([])
    const [apialeatorio, setapialeatorio ]= useState([])
    const [apivarios, setapivarios ]= useState([])
    useEffect(() => {
        const getapidia = () => {
            fetch('https://zenquotes.io/api/today')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setapidia(resultado);
    
            });
        }
        const getapialeatorio = () => {
            fetch('https://zenquotes.io/api/random')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setapialeatorio(resultado);
    
            });
        }
        const getapivarios = () => {
            fetch('https://zenquotes.io/api/quotes')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setapivarios(resultado);
    
            });
        }
        getapidia()
        getapialeatorio()
        getapivarios()
    },[])
    
    return (
        <Context.Provider
        value={{
            apidia,
            apialeatorio,
            apivarios     
        }}>
        {props.children}
    </Context.Provider>
    )
}
export default ContextProvider;