import { Tooltip, IconButton} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Profile from '../components/Profile';
import SocialLinks from '../components/SocialLinks';
import { motion } from "framer-motion";


function Home(){

    const black = {tooltip: {sx: {bgcolor: 'common.black', '& .MuiTooltip-arrow': {color: 'common.black',},},},}

    return (
        <div className='box'>   
            <motion.div className="container"  initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: true ? 360 : 0}} transition={{ ease: "easeOut", duration: 3 }}>
                <div className="half-left">
                    <Profile/>
                    <SocialLinks/>
                </div>
                
                <div className="half-right" >
                    
                    <div className="first">Hello!</div>
                    <div className="second">Here's who I am & what I do</div>
        
                    <ul> 
                        <li>
                        <Tooltip title="Projects" placement="left" arrow componentsProps={black}>
                            <IconButton  sx={{color: "black"}}>
                                <AccountTreeIcon sx={{ fontSize: 60 }} />
                            </IconButton>
                        </Tooltip>	
                        </li>
                        <li>
                        <Tooltip title="Resume" placement="left" arrow componentsProps={black}> 
                            <IconButton  sx={{color: "black"}} >
                                <PictureAsPdfIcon sx={{ fontSize: 60}} />
                            </IconButton>
                        </Tooltip>	
                        </li>
                    </ul> 
                    
                </div>
            </motion.div>
        </div>
    )
}

export default Home