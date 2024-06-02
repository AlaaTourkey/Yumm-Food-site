import React, { useEffect, useState } from 'react';
import Style from './Itemdetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { object } from 'yup';

function Itemdetails() {
  let { idMeal } = useParams();

  const [mealDetails, setMealDetails] = useState({});

  async function getMealDetails() {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      // console.log(data.meals[0]);
      // setMealDetails(data.meals[0]);

      return data.meals[0]
  }


  // console.log(mealDetails);

  // get Ingredient of the meal 

  async function mealsIngredient() {
    let detailsOpject = await getMealDetails()
    detailsOpject.ingredients = [];
    const describeMap = new Map(Object.entries(detailsOpject))
    for (let i = 0; i < describeMap.size; i++) {
      if (describeMap.get(`strIngredient${i}`)) {
        detailsOpject.ingredients.push(
          ` ${describeMap.get(`strMeasure${i}`)} ${describeMap.get(`strIngredient${i}`)}`
        )
      }
      
    }
    setMealDetails(detailsOpject);
    console.log(detailsOpject);
  }

  useEffect(() => {
    mealsIngredient();
  }, []);


  return (
    <>
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="">
            <img className='w-100' src={mealDetails.strMealThumb} alt="" />
          </div>
        </div>
        <div className="col-md-6 p-5">
        <span className="badge text-bg-secondary fs-4">{mealDetails.strMeal}</span>
          <p><h3> Instructions:</h3> {mealDetails.strInstructions && mealDetails.strInstructions.split(' ').slice(3, 40).join(' ')}</p>
          <h3>Area : {mealDetails.strArea}</h3>
          <h3>Category : {mealDetails.strCategory}</h3>
          <h3  > Details : <br /> {mealDetails.ingredients?.map( (item, index)=>
            <span className="badge text-bg-warning m-2 fs-5" key={index}> {item} </span>
          )}</h3>
          <a className="btn btn-primary fs-4"  href = { `${mealDetails.strSource}`} target='_blank'> Source  </a>
          <a className="btn btn-danger fs-4 mx-3"  href = { `${mealDetails.strYoutube}`} target='_blank' > Youtyube  </a>

        </div>
      </div>
    </>
  );
}

export default Itemdetails;
