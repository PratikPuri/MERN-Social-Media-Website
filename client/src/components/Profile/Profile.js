import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';



// {auth: { isAuthenticated, loading }}
// const Profile = () => {
//     return (
//         <section className="profile">
//         <div class="profile-grid my-1">
//         <div class="profile-top bg-primary p-2">
//           <h1 class="large">John Doe</h1>
//           <p class="lead">Developer at Microsoft</p>
//           <p>Seattle, WA</p>
//           <div class="icons my-1">
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <i class="fas fa-globe fa-2x"></i>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <i class="fab fa-twitter fa-2x"></i>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <i class="fab fa-facebook fa-2x"></i>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <i class="fab fa-linkedin fa-2x"></i>
//             </a>
//              <a href="#" target="_blank" rel="noopener noreferrer">
//               <i class="fab fa-youtube fa-2x"></i>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <i class="fab fa-instagram fa-2x"></i>
//             </a>
//           </div>
//         </div>
//         </div>
//         </section>
//     )
// }

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//   auth: state.auth
// })

// export default Profile


// Uncomment from here
const Profiles = ({getProfiles, profiles: { profiles, loading } }) => {
  useEffect(() => {getProfiles();}, [])
  // console.log(profiles);
  return (
    <section className="container">
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with developers
          </p>
          <div className="profiles">
            {/* {profs.map((profile) => (<ProfileItem key={profile._id} profile={profile} />))} */}
          </div>
        </Fragment>
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profiles: state.profiles
});

export default connect(mapStateToProps, { getProfiles })(Profiles);