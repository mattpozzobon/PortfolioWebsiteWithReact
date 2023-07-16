import { Tooltip, IconButton} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Email from './Email';

export default function SocialLinks() {

    const openYoutube =  () => {
        window.open("https://www.youtube.com/channel/UCtn6hwRZf5M5EafC9xah8pg")
    }

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/mattpozzobon/")
    }

    const openGithub = () => {
        window.open("https://github.com/mattpozzobon")
    }

  return (
    <div className="linksList">
        <li>			
            <Tooltip title="Youtube" placement="top" arrow>
                <IconButton onClick={openYoutube} sx={{color: "white", '&:hover': {backgroundColor: "#353536"}}}>
                    <YouTubeIcon sx={{ fontSize: 40 }}/>
                </IconButton>
            </Tooltip>	

            <Tooltip title="Linkedin" placement="top" arrow>
                <IconButton onClick={openLinkedin} sx={{color: "white", '&:hover': {backgroundColor: "#353536"}}}>
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>	

            <Tooltip title="GitHub" placement="top" arrow>
                <IconButton onClick={openGithub} sx={{color: "white", '&:hover': {backgroundColor: "#353536"}}}>
                    <GitHubIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>
    	             
            <Email/>  
        </li>
        
    </div>
  )
}
