import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu({ setCategory }) {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <div className='category'>
      <div className='cat-title'>
      <h2>Choose your level of pain:</h2>
      </div>
      {categories.map((item) => (
        <button className='cat-btn'
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      <a href={'https://www.heinz.com/products/0000000117'}>
      <button className='cat-btn'>Medium</button> 
      </a>
      <a href={'https://www.icemountainwater.com/'}>
      <button className='cat-btn'>Mild</button> 
      </a>
      <button className='cat-btn' onClick={() => window.location.reload()}>All Products</button>
    </div>
  );
}

export default CategoryMenu;
