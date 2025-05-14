import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const {_id,name, photo, category, supplier ,chef,taste,details} = useLoaderData()
  const handleUpdate=(e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)
    const updateCoffee = Object.fromEntries(formData.entries())
    console.log(updateCoffee)
    fetch(`http://localhost:5000/coffees/${_id}`,{
      method:"PUT",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(updateCoffee)
    }).then(res=>res.json()).then(data=>{
      if(data.modifiedCount){
        Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your coffee update is successfully",
  showConfirmButton: false,
  timer: 1500
});
      }
    })}
  return (
   <div className="w-full max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-semibold text-center text-orange-700 mb-8">
          Update Coffee
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Coffee Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter chef name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter supplier name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Describe the taste"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter category"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Additional details"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
           Update Coffee
          </button>
        </form>
      </div>
  );
};

export default UpdateCoffee;