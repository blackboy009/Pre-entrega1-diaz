import React from 'react';

const ItemListContainer = () => {
  const items = [
    { id: 1, name: 'ejemplo 1', price: '$1' },
    { id: 2, name: 'ejemplo 2', price: '$2' },
    { id: 3, name: 'ejemplo 3', price: '$3' },
  ];

  return (
    <div className="container mt-5">
      <h2>Lista de productos</h2>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4" key={item.id}>
            <div className="card">
              <img src="https://via.placeholder.com/" alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
