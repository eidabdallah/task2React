import { useState } from 'react';

export default function Navbar() {
  const [shrink, setShrink] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) { 
      setShrink(true);
    } else {
      setShrink(false);
    }
  };
  if (typeof window !== "undefined") {
    window.onscroll = handleScroll;
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top text-white ${shrink ? 'py-2' : 'py-4'}`}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">START BOOTSTRAP</a>
        <button className="navbar-toggler text-white rounded py-2" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu">MENU</span>
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link text-white fw-bold py-3 px-0 px-lg-3 rounded" href="#">PORTFOLIO</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link text-white fw-bold py-3 px-0 px-lg-3 rounded" href="#">ABOUT</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link text-white fw-bold py-3 px-0 px-lg-3 rounded" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
