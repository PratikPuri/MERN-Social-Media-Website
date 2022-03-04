import React, { Fragment, useState, useEffect } from 'react';
import { Link, useMatch, useNavigate, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
  company: '',
  website: '',
  location: '',
  interests: '',
  about: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: '',
  birthDate: ''
};



// profile: { profile, loading },getCurrentProfile,
const ProfileForm = ({createProfile,isAuthenticated }) => {
  
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();
  
  if (!isAuthenticated){
    return <Navigate to = '/'/>;
  }

//   const creatingProfile = useMatch('/create-profile');


//   useEffect(() => {
//     // if there is no profile, attempt to fetch one
//     if (!profile) getCurrentProfile();

//     // if we finished loading and we do have a profile
//     // then build our profileData
//     if (!loading && profile) {
//       const profileData = { ...initialState };
//       for (const key in profile) {
//         if (key in profileData) profileData[key] = profile[key];
//       }
//       for (const key in profile.social) {
//         if (key in profileData) profileData[key] = profile.social[key];
//       }
//       // the skills may be an array from our API response
//       if (Array.isArray(profileData.skills))
//         profileData.skills = profileData.skills.join(', ');
//       // set local state with the profileData
//       setFormData(profileData);
//     }
//   }, [loading, getCurrentProfile, profile]);

  const {
    company,
  website,
  location,
  interests,
  about,
  twitter,
  facebook,
  linkedin,
  youtube,
  instagram,
  birthDate
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
      console.log("submitted");
    e.preventDefault();
    createProfile(formData, navigate);
  };

  return (
    <section className="container1">
      <p className="lead">
        <i className="fas fa-user" /> Create or Edit Your Profile
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={onChange} />
          <small className="form-text">Please enter your business name or your place of work</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange={onChange} />
          <small className="form-text"> Please enter your website details </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={onChange} />
          <small className="form-text"> Please enter your present location </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Interests" name="interests" value={interests} onChange={onChange} />
          <small className="form-text"> Please enter comma separated values (eg. Football, Cycling, Painting) </small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="about" value={about} onChange={onChange}/>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        {/* <div className="form-group">
          <textarea placeholder="birthDate" name="birthDate" value={birthDate} onChange={onChange}/>
          <small className="form-text">Please enter your birth date</small>
        </div> */}
        <div className="form-group social-input">
            <i className="fab fa-twitter fa-2x" />
            <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={onChange}/>
        </div>
        <div className="form-group social-input">
            <i className="fab fa-facebook fa-2x" />
            <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={onChange}/>
        </div>
        <div className="form-group social-input">
            <i className="fab fa-youtube fa-2x" />
            <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={onChange}/>
        </div>
        <div className="form-group social-input">
            <i className="fab fa-linkedin fa-2x" />
            <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={onChange}/>
        </div>
        <div className="form-group social-input">
            <i className="fab fa-instagram fa-2x" />
            <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={onChange}/>
        </div>
        <input type="submit" className="btn btn-primary my-1"  onSubmit = {e=>  onSubmit(e)}/>
        <Link className="btn btn-light my-1" to="/home">
          Go Back
        </Link>
      </form>
    </section>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
//   getCurrentProfile: PropTypes.func.isRequired,
//   profile: PropTypes.object.isRequired
isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
// const mapStateToProps = (state) => ({
//   profile: state.profile
// });

// export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
export default connect(mapStateToProps, { createProfile})(ProfileForm);