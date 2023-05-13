import { Tooltip, IconButton} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Link } from "react-router-dom";

export default function HalfRight() {

    const black = {tooltip: {sx: {bgcolor: 'common.black', '& .MuiTooltip-arrow': {color: 'common.black',},},},}
  
    return (
    <div className="half-right" >
                    
        <div className="first">Hello!</div>
        <div className="second">Here's who I am & what I do</div>

        <ul> 
            <li>
            <Tooltip title="Projects" placement="left" arrow componentsProps={black}>
                <Link to="/projects">
                    <IconButton  sx={{color: "black", '&:hover': {backgroundColor: "#B19256"}}}>
                        <AccountTreeIcon sx={{ fontSize: 60 }} />
                        
                    </IconButton>
                </Link>
            </Tooltip>	
            </li>
            <li>
            <Tooltip title="Resume" placement="left" arrow componentsProps={black}> 
                <Link to="/resume">
                    <IconButton  sx={{color: "black", '&:hover': {backgroundColor: "#B19256"}}} >
                        <PictureAsPdfIcon sx={{ fontSize: 60}} />
                    </IconButton>
                </Link>
            </Tooltip>	
            </li>
        </ul> 

    </div>
  )
}
