import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'; // para ir agregando productos y funcionalidades para la segunda pre entrega

function App() {
  return (
    <div className="App">
      {/* Barra de navegación */}
      <NavBar />

      <main>
        {/* headline de la app */}
        <h1>¡Primer pre entrega React!</h1>
        <p>si esto esta cargando es por que messi asi lo quiso</p>

        {/* componente de productos del ecomerce */}
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
