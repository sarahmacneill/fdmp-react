import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="row">
                <div className='col-lg-3 col-sm-0' />
                <div className="col-lg-3 col-sm-12 text-center">
                    <h3>Contact us</h3>
                    <p>forthdimension@email.com</p>
                    <p>+449999999999</p>
                </div>
                <div className="col-lg-3 col-sm-12 text center">
                    <h3>Follow us on social media</h3>
                    <p className="text-center">
                      <a className="social-icon social-icon-light" href="https://www.facebook.com/forthdimensionmusicalproductions"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                      <a className="social-icon social-icon-light" href="https://www.instagram.com/forthdimension79/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>  
                    </p>
                </div>
                <div className='col-lg-3 col-sm-0' />
            </div>
        </div>
    );
}