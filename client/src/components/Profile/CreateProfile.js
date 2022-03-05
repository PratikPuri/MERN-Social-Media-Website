import React, { Fragment, useState, useEffect } from 'react';
import { Link, useMatch, useNavigate, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile} from '../../actions/profile';

const initialState = {
  company: '',
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

const ProfileForm = ({createProfile,isAuthenticated }) => {
  
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();
  
  if (!isAuthenticated){
    return <Navigate to = '/'/>;
  }
  const {
    company,
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
          <input type="text" placeholder="Location" name="location" value={location} onChange={onChange} />
          <small className="form-text"> Please enter your present location </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Interests" name="interests" value={interests} onChange={onChange} />
          <small className="form-text"> Please enter upto 4 comma separated values (eg. Football, Cycling, Painting, Music) </small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="about" value={about} onChange={onChange}/>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <div className="form-group">
          <input placeholder="Date" type="text" onFocus={e=>e.target.type="date"} name="birthDate" value={birthDate} onChange={onChange}/>
          <small className="form-text">Please enter your birth date</small>
        </div>
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
isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { createProfile})(ProfileForm);