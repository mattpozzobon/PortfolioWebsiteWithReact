import { motion } from "framer-motion";
import HalfLeft from '../components/HalfLeft';
import HalfRight from "../components/HalfRight";
import { useEffect } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home(){

    const toastProperties = {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }

    const toastText = "Thank you so much for visiting my website for the first time! I hope you enjoy it!";

    useEffect(() => {
        const cacheVariable = '@First';
        const hasVisited = localStorage.getItem(cacheVariable);
        
        if (!hasVisited) {
            localStorage.setItem(cacheVariable, true);
            toast.info(toastText, toastProperties);
        }
        
      }, []);
    
    

    return (
        <div className='box'> 

            
            <HalfLeft/>
            <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: true ? 1 : 0}} transition={{ ease: "easeOut", duration: 4 }}>
                <HalfRight/> 
            </motion.div>
        
        </div>
    )
}

export default Home