import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './Ingredients.module.css';

function Ingredients() {
  const [ingredient, setIngredient] = useState([]);

  async function getAllIngredients() {
    try {
      let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);
      console.log(data);
      setIngredient(data.meals);
    } catch (error) {
      console.error("Error fetching ingredients data:", error);
    }
  }

  useEffect(() => {
    getAllIngredients();
  }, []);

  return (
    <>
      <h2 className='mt-4 text-center text-uppercase bounce-top' >Ingredients</h2>

      <div className="py-3">
        <div className="row g-3">
          {ingredient?.map((item, index) => (
            <div key={index} className="col-md-3">
              <Link to={`/${item.idMeal}`}>
                <div className={`card position-relative text-black cursor-pointer rounded-2 overflow-hidden`}>
                  <img className="w-100" src={item.strMealThumb} alt={item.strMeal} />
                  <div className="position-absolute top-100 start-0 w-100 h-100 d-flex p-3 align-items-center">
                    <h2 className="fw-bold">{item.strMeal}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ingredients;
