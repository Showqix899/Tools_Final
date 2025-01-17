import React from 'react'

function NavBar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm fex justify-between">
                <a className="btn btn-ghost text-xl">PH Tube</a>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gray-300 text-black">Sort By View</button>
                <button className="btn btn-error text-white bg-red-600 w-[70px]"><a href="">Blog</a></button>
                </div>
        </>
    )
}

export default NavBar
