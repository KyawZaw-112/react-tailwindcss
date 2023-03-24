import React from "react";
import { CgMoreVertical } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./css/MealCart.css";

const MealCarts = ({ name, image,id }) => {
	return (
		<div className="relative parent">
			<img
				className="h-[320px] object-cover rounded-lg image"
				src={image}
				alt=""
			/>
			<Link to={`/detail/${id}`}>
				<p className=" bg-orange-500 w-12 h-12 rounded-[50%] flex justify-center items-center absolute top-[38%] left-[41%] icon">
					<CgMoreVertical className="text-white text-2xl" />
				</p>
			</Link>
			<p className="text-[20px] font-medium mt-3 truncate w-[50%]"> 
				{name}
			</p>
		</div>
	);
};

export default MealCarts;
