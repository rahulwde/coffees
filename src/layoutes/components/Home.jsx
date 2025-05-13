import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeCard from './CoffeCard';

const Home = () => {
  const coffees = useLoaderData()
  console.log(coffees)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          coffees.map(coffee=><CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>)
        }
      </div>
    </div>
  );
};

export default Home;