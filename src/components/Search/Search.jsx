import React, { useEffect, useState } from 'react'
import Style from './Search.module.css'
import axios from 'axios'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

function Search() {

  const [searchData, setSearchData] = useState([]);

  async function getSearchData(type,meal) {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${meal}`)
    setSearchData(data.meals)
    console.log(searchData);
  }

  useEffect(() => {
    getSearchData()
  }, []);


  return (
    <>
      <div className="row text-white py-4 g-3">
        <div className="col-md-6">
          <input onChange={(e) => getSearchData("s",e.target.value)} type="text" className='w-100 form-control' placeholder='Search By Name' />
        </div>
        <div className="col-md-6">
          <input onChange={(e) => getSearchData("f",e.target.value)} type="text" className='w-100 form-control' placeholder='Search By First Letter' maxLength="1" />
        </div>
      </div>
      <div className="row g-3 text-white">

        {!searchData?<h2>Search For Meal ....</h2> : searchData? searchData.map( (meal,index)=> (
          <Card key={index} meal={meal}/> ) ) : <Loading/>}



        {/* {isLoading ? <Loading/> : searchData.length ? searchData.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        )) : <h2>No meals found</h2>} */}
      </div>

    </>
  )
}

export default Search