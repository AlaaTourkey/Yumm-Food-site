import React, { useEffect, useState } from 'react'
import style from './AreaDetails.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AreaDetails() {

  const { areaName } = useParams();
  const [area, setArea] = useState([]);

  async function getMealsByArea() {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    setArea(data.meals);
    console.log(data.meals);
  }

  useEffect(() => {
    getMealsByArea();
  }, []);


  return (
    <>

      <h2 className='mt-4 text-center text-uppercase bounce-top' >some meails in {areaName}</h2>


      <div className="row">
        {area.map((meal) => (

          <div key={meal.idMeal} className="col-md-3 mb-2">
            <div className={`${style.card} position-relative text-black cursor-pointer rounded-2 overflow-hidden`}>
              <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
              <div className="position-absolute top-100 start-0 w-100 h-100 d-flex p-3 align-items-center">
                <h5 className="card-title">{meal.strMeal.split(' ').slice(0, 3).join(' ')}</h5>
              </div>
            </div>
          </div>

        ))}
      </div>
    </>
  )
}

export default AreaDetails