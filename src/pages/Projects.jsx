import { Tooltip, IconButton} from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Link } from "react-router-dom";

export default function Projects() {
    const black = {tooltip: {sx: {bgcolor: 'common.black', '& .MuiTooltip-arrow': {color: 'common.black',},},},}
  return (
    <div>
        
        <Tooltip title="Home" placement="left" arrow componentsProps={black}>
                <Link to="/">
                    <IconButton  sx={{color: "black", '&:hover': {backgroundColor: "#B19256"}}}>
                        <AccountTreeIcon sx={{ fontSize: 60 }} />
                        
                    </IconButton>
                </Link>
            </Tooltip>
    </div>
  )
}
