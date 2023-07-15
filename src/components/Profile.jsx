import profilePic from '../images/profilepic.png';
import React, { useContext} from 'react';
import { DataContext } from '../provider/DataProvider';
import { differenceInMonths, differenceInYears } from 'date-fns';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Profile() {
  const data = useContext(DataContext).data;
  const {name, surname, jobTitle, location, startDate, employmentType, company} = data

  let givenDate = new Date(startDate);
  let now = new Date();

  let diffInMonths = differenceInMonths(now, givenDate);
  let diffInYears = differenceInYears(now, givenDate);

  const currentTime = () => {
    let mon = '';
    let year = '';

    if (diffInYears === 1) {
      mon = `${diffInYears} yr`;
    } else if (diffInYears >= 2) {
      mon = `${diffInYears} yrs`;
    }

    if (diffInMonths === 1) {
      mon = `${diffInMonths} mon`;
    } else if (diffInMonths >= 2) {
      mon = `${diffInMonths} mons`;
    }
    
    if (diffInYears >= 1){
      return `${year} and ${mon}`
    }
    else {
      return `${mon}`
    }
  }

  return (
    <div>
      <img className="profile_picture" src={profilePic} alt='Myself'/>
      <div className='profile_text'>
          <h1 className='name'>{name}</h1>
          <h1 className='name'>{surname}</h1>
      </div>
      <hr/>
      <hr/>
  

      <div className="work-information">
  <div className="profile_details">
    <div className="content">
      <div className="profile_jobTitle">{jobTitle}</div>
      <div className="other_details">
        <div className="icon-detail">
          <div className="icon"><BusinessCenterIcon /></div>
          <div className="profile_company">{company} - {employmentType}</div>
        </div>
        <div className="icon-detail">
          <div className="icon"><CalendarTodayIcon /></div>
          <div className="profile_startDate">{startDate} - Present · {currentTime()}</div>
        </div>
        <div className="icon-detail">
          <div className="icon"><LocationOnIcon /></div>
          <div className="profile_location">{location}</div>
        </div>
      </div>
    </div>
  </div>
</div>








    </div>  
  )
}
