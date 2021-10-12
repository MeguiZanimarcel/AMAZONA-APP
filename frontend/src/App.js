import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Components/Screens/HomeScreen';
import ProductScreen from './Components/Screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
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
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All Right Reserved.</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
