import React, { useEffect, useState } from 'react';
import Style from './Itemdetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Itemdetails() {
  let { idMeal } = useParams();
  console.log(idMeal);

  const [mealDetails, setMealDetails] = useState({});

  async function getMealDetails() {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      console.log(data.meals[0]);
      setMealDetails(data.meals[0]);
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  }

  useEffect(() => {
    getMealDetails();
  }, []);

  console.log(mealDetails);

  return (
    <>
      <h1>Itemdetails</h1>
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="">
            <img className='w-100' src={mealDetails.strMealThumb} alt="" />
          </div>
        </div>
        <div className="col-md-6 p-5">
          <p><h3> Instructions:</h3> {mealDetails.strInstructions && mealDetails.strInstructions.split(' ').slice(3, 40).join(' ')}</p>
          <h3>Area : {mealDetails.strArea}</h3>
          <h3>Category : {mealDetails.strCategory}</h3>

          <span className="badge text-bg-primary fs-4">{mealDetails.strMeal}</span>
          
        </div>
      </div>
    </>
  );
}

export default Itemdetails;
