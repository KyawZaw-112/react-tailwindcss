import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CgLogOff } from "react-icons/cg";
import {BsYoutube} from "react-icons/bs";

const Detail = () => {
	const { id } = useParams();
	const [meals, setMeals] = useState({});
	const [item,setItem] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() =>{
		// const newItem = [{id:1,meals.strIngredient1}]
	})

	const fetchData = async () => {
		const api = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		const { meals } = await api.json();
		setMeals(meals[0]);
		console.log(meals[0]);
	};
	return (
		<div className="flex mx-auto w-[80%] h-screen items-center gap-28">
			<img src={meals.strMealThumb} alt="" className="w-[500px] rounded-lg object-cover select-none" />
			<div>
				<h2 className=" mb-6 text-5xl font-extrabold text-[#21e6c1] tracking-wide select-none">{meals.strMeal}</h2>
				<p className=" mb-5 text-4xl font-bold text-[#278ea5] tracking-wide select-none">{meals.strCategory}</p>
				<p className="mb-4 text-3xl font-semibold text-[#1f4287] tracking-wide select-none"> {meals.strArea} </p>
				<p className="text-xl font-medium tracking-wide leading-8 mb-4"> {meals.strInstructions} </p>
					<a href={meals.strYoutube} target={"_blank"} className=" flex align-middle items-center gap-7">
						<BsYoutube className=" text-red-500 text-5xl"/>
						<p className=" text-lg">
							If you want to watch this video you can click here
						</p>
					</a>
			</div>
		</div>
	);
};

export default Detail;
