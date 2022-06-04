import React from 'react';
import { useEffect, useState } from 'react'
import { List } from './copmponents/List';
import { Route, Routes, Link } from 'react-router-dom';
import { Header } from './copmponents/Header';
import { Footer } from './copmponents/Footer';
export const App = () => {

  const [books, setBooks] = useState([])
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || []);


  

  useEffect(() => {
    fetch('https://www.anapioficeandfire.com/api/books?pageSize=30')
      .then(response => response.json())
      .then(response => setBooks(response))
      .catch(err => console.error(err));
  }, [])

  return (

    <div className="container">
      <Header basket={basket} />
      <Routes>

        <Route path='/' element={<List list={books} basket={basket} setBasket={setBasket} />} />
   

      </Routes>
      <Footer />
    </div>

  );

}
export default App;
