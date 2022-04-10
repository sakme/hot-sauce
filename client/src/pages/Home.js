import React, { useState } from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Home = () => {
  const [currentCategory, setCategory] = useState('');

  return (
    <div className='container'>
      <CategoryMenu setCategory={setCategory}/>
      <ProductList currentCategory={currentCategory} />
      <Cart />
      {/* <footer className='bg-black'>
        <h2> 
          Fire in the Hole &reg; 
        </h2>
      <div>
          <h3>
            Created by: Alan Rabideau, Glen Luersman, Jacob Allred & Niraj Limbu
          </h3>
          <a href="https://github.com/YourFunkyDad/Hot-Sauce">GitHub Repository</a><br />
        <h6>&copy; OSU Full Stack Web Development Coding Bootcamp - Project 3</h6>

      </div>
      </footer> */}
    </div>
    
  );
};

export default Home;
