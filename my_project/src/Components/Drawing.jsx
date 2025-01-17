import React from 'react'
import { useState,useEffect } from 'react';

function Drawing() {

    const [data, setData] = useState(null);
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);


    const fetchData = async () => {
              try {
                const response = await fetch(
                  "https://openapi.programming-hero.com/api/videos/category/1005"
    
                );
          
                if (!response.ok) {
                  throw new Error("Network Problem, Make sure network connection is stable");
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
              } catch (err) {
                setError(err); // Fix: Pass the error object to setError
                setLoading(false);
              }
            };
          
            useEffect(() => {
              fetchData();
            }, []);
          
            if (loading) return <p>Loading ....</p>;
            if (error) return <p>Error: {error.message}</p>;
            if (!data || !data.data || data.data.length === 0) {
              return <div className="text-center text-red-500 text-xl">No Items Found</div>;
            }
            return (
    <>
       <div className="flex flex-wrap">
      {data &&
        data.data.map((entry, index) => (
          <div  className="card m-2 w-[300px]  p-2">
            <figure>
              <img
                src={entry.thumbnail}
                alt="Thumbnail"
                className="w-[300px] h-[200px] object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">{entry.title}</h2>
              <div className="authors flex items-center mt-2 space-x-4">
                {entry.authors.map((author, authorIndex) => (
                  <div key={authorIndex} className="author flex items-center space-x-2">
                    <img
                      src={author.profile_picture}
                      alt="Author"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{author.profile_name}</p>
                      <p className="text-xs text-gray-500">
                        {author.verified ? "Verified" : "Not Verified"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                A card component has a figure, a body part, and inside the body,
                there are title and actions parts.
              </p>
              <p className='text-black'>views: {entry.others.views}</p>

            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default Drawing
