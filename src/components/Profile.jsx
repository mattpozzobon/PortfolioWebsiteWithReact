import profilePic from '../images/profilepic.png';

export default function Profile() {
  return (
    <div>
      <img className="profile_picture" src={profilePic}/>
      <div className='profile_text'>
          <h1 className='name'>Matheus</h1>
          <h1 className='name'>Pozzobon</h1>
      </div>
      <hr/>
      <hr/>
      <h3 className="profile_profession">Computer Science Graduate</h3>
    </div>
  )
}
