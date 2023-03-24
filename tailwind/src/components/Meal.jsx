import React from 'react';
import { useState, useEffect } from "react";
import MealCarts from './MealCarts';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        fetchMeal()
    },[])
    const fetchMeal = async() => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
        const {meals} = await api.json();
        setMeals(meals);
        console.log(meals);
    }
    return (
        <div className='flex flex-wrap gap-10 justify-center my-10'>
            {meals.map(i=> {
                return (
                    <MealCarts key={i.idMeal} name={i.strMeal} image={i.strMealThumb} alt="" id={i.idMeal} /> 
                    
            )
            })}
        </div>
    );
}

export default Meal;
