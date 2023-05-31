import React from 'react'
import FooterImg from "./image/footer.jpg"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-photo">
        <img src={FooterImg} alt="" />
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Tour</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Flight</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Review</a></li>
    </ul>
    <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
  </footer>
</div>
      </div>
    </div>
  )
}

export default Footer