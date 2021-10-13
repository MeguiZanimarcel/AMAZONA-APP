import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Actions/ProductActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import Produit from '../Produit';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;


    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
    return (
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row center">
            {products.map((product) => (
              <Produit key={product._id} product={product}></Produit>
            ))}
          </div>
        )}
      </div>
    );
  }
