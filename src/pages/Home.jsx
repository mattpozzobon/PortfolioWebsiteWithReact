import { motion } from "framer-motion";
import HalfLeft from '../components/HalfLeft';
import HalfRight from "../components/HalfRight";


function Home(){

  
    return (
        <div className='box'> 
        
            <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: true ? 1 : 0, rotate: true ? 360 : 0}} transition={{ ease: "easeOut", duration: 2 }}>
                
                <HalfLeft/>
                <HalfRight/>
                
            </motion.div>
        
        </div>
    )
}

export default Home