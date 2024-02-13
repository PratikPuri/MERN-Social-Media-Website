import React, { Fragment, useEffect } from 'react';
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

// 
const Profiles = ({getProfiles , isAuthenticated, profiles:{profiles,loading}}) => {
  useEffect(() => {getProfiles();}, [getProfiles]);
  if (!isAuthenticated){
    return <Navigate to = '/'/>;
}
console.log("got them");
  console.log(profiles);
  return (
    <section className="container-1">
        <Fragment>
          <h1 className="large text-primary">Profiles</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with people
          </p>
          <div className="profiles">
            {profiles.map((profile) => (<ProfileItem key={profile._id} profile={profile} />))}
          </div>
        </Fragment>
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  profiles: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    profiles: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles);
