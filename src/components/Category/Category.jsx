import React, { useEffect, useState } from 'react';
import style from './Category.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

function Category() {
  const [category, setCategory] = useState([]);

  async function getAllCategories() {
    let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    console.log(data.categories);
    setCategory(data.categories);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <h2 className='mt-4 text-center text-uppercase bounce-top' >Category</h2>
      <div className="py-3">
        <div className="row g-3">
          {category.length > 0 ? <> {category?.map((item, index) => (
            <div key={index} className="col-md-3">
              <Link to={`/category/${item.strCategory}`}>
                <div className={`card position-relative text-black cursor-pointer rounded-2 overflow-hidden`}>
                  <img className="w-100" src={item.strCategoryThumb} alt="" />
                  <div className="position-absolute top-100 start-0 w-100 h-100 d-flex p-3 align-items-center">
                    <h2 className="fw-bold">{item.strCategory}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))} </> : <Loading/>}
        </div>
      </div>
    </>
  );
}

export default Category;
