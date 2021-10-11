import React from 'react';
import Produit from './Components/Produit';
import data from './data';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">AMAZONA</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">SignIn</a>
            </div>
        </header>
        <main>
            <div>
                <div className="row center">
                {data.products.map((product)=>(
                  <Produit key={product._id} product={product}></Produit>
                  ))}                  
               </div>
             </div>
        </main>
        <footer className="row center">All Right Reserved.</footer>
    </div>
  );
}

export default App;
