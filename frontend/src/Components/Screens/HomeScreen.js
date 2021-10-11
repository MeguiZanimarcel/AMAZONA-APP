import React from 'react';
import Produit from '../Components/Produit';
import data from './data';

export default function HomeScreen() {
    return (
        <div>
                <div className="row center">
                {data.products.map((product)=>(
                  <Produit key={product._id} product={product}></Produit>
                  ))}                  
            </div>
        </div>
    );
}
