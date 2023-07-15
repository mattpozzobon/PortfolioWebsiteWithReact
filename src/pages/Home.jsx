import React, { useContext} from 'react';
import { motion } from "framer-motion";
import HalfLeft from '../components/HalfLeft';
import HalfRight from "../components/HalfRight";
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../provider/DataProvider';


export default function Home(){
    const data = useContext(DataContext);
    const {isFirstTime, isLoading} = data

    if (!isLoading){
        return (
            <div className='box'>
                <HalfLeft/>
                {isFirstTime && (
                <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: true ? 1 : 0}} transition={{ ease: "easeOut", duration: 4 }}>
                    <HalfRight/>
                </motion.div>
                )}
                {!isFirstTime && <HalfRight/>}
            </div>
        );
    }
}