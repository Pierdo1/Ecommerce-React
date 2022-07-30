import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import ItemsContenedor from './componentes/ItemsContenedor/ItemsContenedor';
import Contador from './componentes/Contador/Contador';

import './App.css';

function App() {
  const HandleOnAdd = (cantidad) => {
    alert(`agregaste: ${cantidad}`)
  }
  return (
    <div className="App">
      <Navbar/>
      <ItemsContenedor greeting='Hello World'/>
      <Contador stock={10} onAdd={HandleOnAdd}/>
    </div>
  );
}

export default App;
