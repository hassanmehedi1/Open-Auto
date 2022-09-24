import React from 'react';
import "../Styles/Midpart.css"
import Phone from "../assets/pickup-phn.png";

const Midpart = () => {
   return (
     <>
       <div className="bodyMid">
         <div class="container px-6 py-16 mx-auto">
           <div class="items-center lg:flex">
             <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/3">
               <img class="w-full h-full" src={Phone} alt="Banner img" />
             </div>

             <div class="w-full lg:w-1/2 lg:ml-36">
               <div class="lg:max-w-lg">
                 <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
                   Focused on <br /> Time Saving
                 </h1>

                 <p class="mt-4 text-gray-600 dark:text-gray-400 mb-10">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                   Expedita ipsa aspernatur quo et laudantium aliquam
                   accusantium? Molestias et rerum consectetur voluptatem
                   incidunt eligendi tempora modi unde? Magni voluptatibus velit
                   dicta!
                 </p>

                 <a
                   class="my-1 text-sm flex justify-center items-center text-gray-500 rtl:-scale-x-100 dark:text-gray-200 hover:bg-blue-500 lg:mx-4 lg:my-0 border-2 px-5 py-3 rounded-full w-72"
                   href="#"
                 >
                   Download the mobile app
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
};

export default Midpart;