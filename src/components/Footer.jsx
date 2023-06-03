import React from 'react'
import FooterImg from "./image/footer.jpg"
import "./Footer.css"
// import { a, Nava } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-photo">
        <img src={FooterImg} alt="" />
        <div className="container">
          <footer className=" my-4">
            <ul className="nav d-flex justify-content-between border-bottom pb-3 mb-3">
              <li className="nav-item" ><a href="#" className="nav-a px-2 text-muted">Home</a></li>
              <li className="nav-item" ><a href="#about" className="nav-a px-2 text-muted">About</a></li>
              <li className="nav-item" ><a href="#tour" className="nav-a px-2 text-muted">Tour</a></li>
              <li className="nav-item" ><a href="#flight" className="nav-a px-2 text-muted">Flight</a></li>
              <li className="nav-item" ><a href="#reviews" className="nav-a px-2 text-muted">Review</a></li>
              <li className="nav-item" ><a href="#       " className="nav-a px-2 text-muted">Privacy Policy</a></li>
              <li className="nav-item" ><a href="#       " className="nav-a px-2 text-muted">Terms & Condition</a></li>
              <li className="nav-item" ><a href="#       " className="nav-a px-2 text-muted">Contact Us</a></li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer