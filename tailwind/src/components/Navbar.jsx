import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TfiSearch } from "react-icons/tfi";

const Navbar = () => {
    const [search,setSearch] = useState('');
    const nav = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        nav(`/search/`+search)
    }    
	return (
		<div className="flex justify-around p-4 rounded-lg shadow-lg align-middle items-center">
            <Link to={"/"}>
                <div className="flex items-center gap-4">
                    <GiForkKnifeSpoon className="text-4xl" />
                    <h1 className="text-[40px] font-bold text-[#e41749]">Foodie with Simplicity</h1>
                </div>
            </Link>
            <form onSubmit={submitHandler}>
                <div className="w-70 flex">
                    <input value={search} onChange={e=>setSearch(e.target.value)} type="text" className="outline-none border-b-4 border-b-[#cefff1] focus:border-none w-96 h-10 text-2xl pl-3" aria-placeholder="Search" placeholder="Search" />
                    <div className="w-20 bg-[#bbffff] text-center rounded-tr-2xl rounded-br-2xl hover:bg-[#92d4d4] cursor-pointer">
                        <TfiSearch className="text-black text-2xl m-auto mt-2 " />
                    </div>
                </div>
            </form>
		</div>
	);
};

export default Navbar;
