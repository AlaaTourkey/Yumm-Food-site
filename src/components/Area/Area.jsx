import React, { useEffect, useState } from 'react';
import Style from './Area.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

function Area() {
  const [area, setArea] = useState([]);

  async function getAllAreas() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    console.log(data.meals);
    setArea(data.meals);
  }

  useEffect(() => {
    getAllAreas();
  }, []);

  return (
    <>
    <h2 className='mt-4 text-center text-uppercase bounce-top' >search by area</h2>

      <div className="py-2">
        <div className="row g-3">
        {area.length === 0 ? (
            <Loading />
          ) : (
            area.map((item, index) => (
              <div key={index} className="col-4">
                <Link to={`/areas/${item.strArea}`}>
                  <div className="p-1 cursor-pointer rounded-2 bg-body-secondary">
                    <div className="d-flex flex-column align-items-center">
                      <i className="fas fa-home fs-5"></i>
                      <p  className="fw-bold h6 ">{item.strArea}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Area;
