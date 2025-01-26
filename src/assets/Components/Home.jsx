import React from 'react'; // Import the image
import backgroundImage from "../Assets/home.png";
import Navbar from './Navbar';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center text-white h-screen w-full flex flex-col justify-between"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <div className='flex-grow flex flex-col justify-center h-auto mx-4 sm:mx-8 md:mx-14 lg:mx-20 lg:text-left'>
      <h1 className=' xl:text-7xl max-w-full lg:max-w-100 font-bold text-white'>
  Get Cashback
</h1>
<h1 className='text-4xl shadow-mdsm:text-4xl md:text-5xl  xl:text-7xl max-w-full lg:max-w-92 font-bold text-white'>
  up to 50%
</h1>
{/*  shadow-orange-200/50  */}
        <p className='text-lg sm:text-xl md:text-xl lg:text-2xl mt-12'>
          Lorem ipsum dolor sit amet. Lorem ipsum 
        </p>
        <p className='text-lg sm:text-xl md:text-xl lg:text-2xl'>
          Lorem ipsum dolor sit amet. Lorem 
        </p>
        <p className='text-lg sm:text-xl md:text-xl lg:text-2xl'>
          Lorem ipsum dolor sit amet.
        </p>
        <button className='bg-red-500 hover:bg-green-500 sm:w-73 sm:h-24 md:w-56 md:h-24 lg:w-96 lg:h-24 xl:w-72 xl:h-12 mt-5 rounded-full border-none'>
  Order Now
</button>
      </div>
    </div>
  );
}

export default Home;
