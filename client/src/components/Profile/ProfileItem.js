import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: 
  {user: { _id, name, avatar },
  company,
  location,
  interests,
  about,
  youtube,
  twitter,
  facebook,
  linkedin,
  instagram,
  birthDate}}) => 
  {return (
    <div className='profile bg-light'>
      <div className="item1">
      <h2>{name}</h2></div>
      <div className="item2">
      {company && <p><i class="fa-solid fa-briefcase"></i>{"   "}{company}</p>}
      {location && <p><i className="fa-solid fa-location-dot"></i>{"   "}{location}</p>}
        {about && <p><i className="fa-solid fa-address-card"></i>{"   "}{about}</p>}
        {birthDate && <p><i class="fa-solid fa-cake-candles"></i>{"   "}{birthDate}</p>}
      </div>
      <div className="item3">
      <ul>
        <b>Interests</b>
        {interests.slice(0, 4).map((interest, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {interest}</li>))}
      </ul></div>
      <div className="item4">
        {youtube && <p><i className="fa-brands fa-youtube"></i>{"   "}<a href={youtube} className="profile-link">YouTube</a></p>}
        {twitter && <p><i className="fa-brands fa-twitter"></i>{"   "}<a href={twitter} className="profile-link">Twitter</a></p>}
        {facebook && <p><i className="fa-brands fa-facebook"></i>{"   "}<a href={facebook} className="profile-link">Facebook</a></p>}
        {linkedin && <p><i className="fa-brands fa-linkedin"></i>{"   "}<a href={linkedin} className="profile-link">LinkedIn</a></p>}
        {instagram && <p><i className="fa-brands fa-instagram"></i>{"   "}<a href={instagram} className="profile-link">Instagram</a></p>}
      </div>
    </div>)}
    
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;