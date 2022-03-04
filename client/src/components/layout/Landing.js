import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="buttons">
            <pre><Link to="/register" className="btn btn-1">Sign Up</Link>
              <Link to="/login" className="btn btn-2">Login</Link></pre>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing