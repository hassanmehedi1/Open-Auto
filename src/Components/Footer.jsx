import React from 'react';
import "../Styles/Header.css"

const Footer = () => {
   return (
     <div className="">
       <footer class="flex flex-col items-center justify-between p-6 bodyHead sm:flex-row px-16">
         <div className="space-y-5">
           <a
             href="#"
             class="text-3xl lg:text-xl font-bold text-white sm:mx-auto"
           >
             OpenAuto
           </a>

           <p class="text-sm text-gray-600 dark:text-gray-300">
             Open Auto @ all rights reserved
           </p>
         </div>

         <div className="space-y-5">
           <div className="lg:flex">
             <a
               class="my-1 text-sm flex justify-center items-center text-gray-500 rtl:-scale-x-100 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
               href="#"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="icon icon-tabler icon-tabler-phone mr-2"
                 width="23"
                 height="23"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 fill=""
                 stroke-linecap="round"
                 stroke-linejoin="round"
               >
                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                 <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
               </svg>
               + 769 586 455
             </a>
             <a
               class="my-1 text-sm flex justify-center items-center text-gray-500 rtl:-scale-x-100 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
               href="#"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="icon icon-tabler icon-tabler-mail mr-2"
                 width="23"
                 height="23"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 fill="none"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               >
                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                 <rect x="3" y="5" width="18" height="14" rx="2" />
                 <polyline points="3 7 12 13 21 7" />
               </svg>
               service@openauto.ca
             </a>
           </div>

           <div className="flex justify-center lg:justify-end space-x-1 container py-2">
             <a href="/">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="icon icon-tabler icon-tabler-brand-facebook"
                 width="28"
                 height="28"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke=""
                 fill="#CFD1D4"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               >
                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                 <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
               </svg>
             </a>
             <a href="">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="icon icon-tabler icon-tabler-brand-twitter"
                 width="28"
                 height="28"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke=""
                 fill="#CFD1D4"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               >
                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                 <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
               </svg>
             </a>
             <a href="/">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="icon icon-tabler icon-tabler-brand-youtube"
                 width="28"
                 height="28"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="#CFD1D4"
                 fill="#121821"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               >
                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                 <rect x="3" y="5" width="18" height="14" rx="4" />
                 <path d="M10 9l5 3l-5 3z" />
               </svg>
             </a>
             <a href="/">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="icon icon-tabler icon-tabler-brand-linkedin"
                 width="28"
                 height="28"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="#CFD1D4"
                 fill="#121821"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               >
                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                 <rect x="4" y="4" width="16" height="16" rx="2" />
                 <line x1="8" y1="11" x2="8" y2="16" />
                 <line x1="8" y1="8" x2="8" y2="8.01" />
                 <line x1="12" y1="16" x2="12" y2="11" />
                 <path d="M16 16v-3a2 2 0 0 0 -4 0" />
               </svg>
             </a>
             <a href="">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="icon icon-tabler icon-tabler-brand-instagram"
                 width="28"
                 height="28"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="#CFD1D4"
                 fill="none"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               >
                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                 <rect x="4" y="4" width="16" height="16" rx="4" />
                 <circle cx="12" cy="12" r="3" />
                 <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
               </svg>
             </a>
           </div>
         </div>
       </footer>
     </div>
   );
};

export default Footer;