import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link  to=""  className="text-white">About Us</Link></li>
              <li><Link  to=""className="text-white">Team</Link></li>
              <li><Link to=""  className="text-white">Careers</Link></li>
              <li><Link to="" className="text-white">Blog</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><Link to="" className="text-white">Contact Us</Link></li>
              <li><Link to="" className="text-white">Support</Link></li>
              <li><Link to="" className="text-white">FAQ</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-white"><i className="fa fa-facebook"></i> Facebook</a></li>
              <li><a href="https://twitter.com" className="text-white"><i className="fa fa-twitter"></i> Twitter</a></li>
              <li><a href="https://instagram.com" className="text-white"><i className="fa fa-instagram"></i> Instagram</a></li>
              <li><a href="https://linkedin.com" className="text-white"><i className="fa fa-linkedin"></i> Linkedin</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Download Our App</h5>
            <div>
              <a href="#"><img src="/path/to/appstore.png" alt="App Store" className="img-fluid mb-2"/></a>
            </div>
            <div>
              <a href="#"><img src="/path/to/playstore.png" alt="Play Store" className="img-fluid"/></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <span>© 2024 CraveCurb, Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
