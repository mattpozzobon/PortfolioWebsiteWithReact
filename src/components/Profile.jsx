import profilePic from '../images/profilepic.png';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function Profile() {
  return (
    <div>
      <img className="profile_picture" src={profilePic} alt='Myself'/>
      <div className='profile_text'>
          <h1 className='name'>Matheus</h1>
          <h1 className='name'>Pozzobon</h1>
      </div>
      <hr/>
      <hr/>
      
      
      <div className='work-title'>
        <div  className="profile_profession">Associate - Graduate Programme</div >
        
        <div className="profile_company">
          <Tooltip title="Place of work" placement="left">
            <BusinessCenterIcon>
            </BusinessCenterIcon>
            
          </Tooltip>
          <div>Dunnhumby</div >
        </div>
      </div>
    </div>
  )
}
