import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'
import Card from '../Card/Card'
import axios from 'axios'
import Loading from '../Loading/Loading';

function Home() {
  const [meals, setMeals] = useState([]);
  async function getAllMeals() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    setMeals(data.meals)
    // console.log(data);
  }
  useEffect(() => {
    getAllMeals()
  }, []);

  console.log(meals);
  return (
    <>
      {meals.length ? (
        <div className="py-5">
          <div className="row g-3">
            {meals.map((item, index) => (
              <Card meal={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <Loading/>
      )}

    </>
  )
}

export default Home