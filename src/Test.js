
import React, { useEffect, useRef } from "react";

import  Aos from 'aos';
import 'aos/dist/aos.css'



export default function Animation() {
  const container = useRef(null);
  
  useEffect(()=>{
      Aos.init({
        offset: 100,
        duration: 1000,
       
        easing: "ease",
      });
      
  })
 
  return (
     <div>
         
     </div>
  );
}
