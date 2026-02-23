import "./App.css";
import { useState } from "react";

function App() {
  //Aquí tu código

  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const changeName = (name) => {
    setName(name);
  };

  return (
    <>
      <div className="App">
        <form action="">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Escribe el nombre"
          />
          {/* si quiero mostrar lo que va escribiendo en el input, puedo usar el valor del estado inputValue y mostrarlo debajo del input, por ejemplo: <p>{inputValue}</p> y así se actualizará en tiempo real a medida que el usuario escriba.   
        por ejemplo:
        <p>Valor del input: {inputValue}</p> */}

          {inputValue && <p>Escribiendo: {inputValue}</p>}
          <button type="button" onClick={() => changeName(inputValue)}>
            Guardar nombre
          </button>
        </form>
        {name && <h1>Nombre: {name}</h1>}
      </div>
    </>
  );
}

export default App;
