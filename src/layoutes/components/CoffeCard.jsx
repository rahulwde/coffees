import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,coffees, setCoffees}) => {
  const { _id,name, photo, category, supplier } = coffee;
  const handleDelete= (_id)=>{
    console.log("click id",_id)

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   fetch(`http://localhost:5000/coffees/${_id}`,{
    method:"DELETE"
   }).then(res=>res.json())
   .then(data=> {
    if(data.deletedCount){

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      const remaining = coffees.filter(coff=>coff._id!== _id)
      setCoffees(remaining)
    }
   })

  }
});
  }
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={photo}
        alt={name}
        className="w-full md:w-48 h-48 object-cover md:rounded-l-xl"
      />

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-semibold text-orange-700">{name}</h2>
          <p className="text-sm text-gray-600 mt-1">Category: {category}</p>
          <p className="text-sm text-gray-600">Supplier: {supplier}</p>
        </div>

        <div className="mt-4 flex gap-3">
       <Link to={`/coffee/${_id}`}>   <button className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition">
            View
          </button></Link>
          <Link to={`/updateCoffee/${_id}`}>   <button className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition">
            Edit
          </button></Link>
          <button onClick={()=>handleDelete(_id)} className="px-4 py-2 bg-red-100 text-red-600 text-sm font-medium rounded-md hover:bg-red-200 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
