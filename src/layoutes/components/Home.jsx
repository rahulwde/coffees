import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeCard from './CoffeCard';

const Home = () => {
  const intiaCoffees = useLoaderData()
   const [ coffees , setCoffees]=useState(intiaCoffees)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          coffees.map(coffee=><CoffeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeCard>)
        }
      </div>
    </div>
  );
};

export default Home;