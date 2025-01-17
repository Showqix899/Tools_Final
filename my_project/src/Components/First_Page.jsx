import React from 'react'
import { useState,useEffect } from 'react'

function First_Page() {

    const [data,setData]=useState(null);
    const [loading,srtLoading]=useState(true)
    const [error,setError]=useState(null)


    const fetchData= async ()=>{
        try{
            const respponse= await fetch("https://openapi.programming-hero.com/api/videos/category/1000")
        }catch{

        }
    }

    return (
        <>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default First_Page
