import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
 

const CoffeeDetails = ( ) => {
  const coffee = useLoaderData()
  console.log(coffee)
  const { name, photo, category, supplier, taste, details } = coffee  
 const navigate = useNavigate()

  return (
    
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Coffee Image */}
        <img
          src={photo}
          alt={name}
          className="w-full md:w-1/2 object-cover h-80 md:h-auto"
        />

        {/* Coffee Details */}
        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h1 className="text-3xl font-bold text-orange-700 mb-4">{name}</h1>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Category:</span> {category}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Supplier:</span> {supplier}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Taste:</span> {taste}</p>
            <p className="text-gray-700 mb-4"><span className="font-semibold">Details:</span> {details}</p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="mt-4 self-start bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            ⬅ Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
