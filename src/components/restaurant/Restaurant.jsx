import React, { useEffect, useState } from 'react';

export default function Restaurant() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('pizza'); 

  const getProducts = async (query) => {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
      const data = await response.json();
      setProducts(data.recipes);
  };

  useEffect(() => {
    getProducts(searchQuery); 
  }, [searchQuery]);

  return (
    <>
      <button onClick={() => setSearchQuery('pizza')}>Change to pizza</button>
      <button onClick={() => setSearchQuery('salad')}>Change to salad</button>
      <button onClick={() => setSearchQuery('Onion ')}>Change to Onion </button>
      <div className="row">
        {products.map((ele) => (
          <div className="col-md-4" key={ele.recipe_id}>
            <h2>{ele.title}</h2>
            <img src={ele.image_url} className="w-100" alt={ele.title} />
          </div>
        ))}
      </div>
    </>
  );
}
