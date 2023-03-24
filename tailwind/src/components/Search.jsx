import React from 'react';
import { useParams } from 'react-router-dom';
import {useState} from 'react';
import { useEffect } from 'react';
import {BsYoutube} from 'react-icons/bs';


  const Search = () => {
  const {name} = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchData();
  },[]) 

  const fetchData = async() => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const {meals} = await data.json();
    setItem(meals[0]);
    console.log(meals);
  }
  return (
    <div className='flex mt-8 gap-5 justify-center items-center'>
          <div>
            <img src={item.strMealThumb} alt="food-pic" className='w-[400px]' />
          </div>
          <div>
            <p className='flex items-center text-[50px] font-medium text-[#40423b]'> <span className=' text-[40px] font-bold mr-6'>name :</span> {item.strMeal} </p>
            <a href={item.strYoutube} target="_blank" className='flex justify-center gap-5 items-center'>
              <BsYoutube className='text-red-500 text-[40px]' />
              <p className=" text-lg">
                If you want to watch this video you can click here
              </p>
            </a>
          </div>
    </div>
  );
}

export default Search;
