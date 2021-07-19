//Navbar.js
import React, {useEffect} from 'react';
import '../styles/navBar.scss';
import loader from '../images/loader.svg';

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60 ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses=['navbar'];

  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <header className={navbarClasses.join(" ")}>
        <div className="logo">
          <img src={loader} className="loader" alt="loader" />
        </div>
        <h1>Patricio Toledo</h1>
        <nav className="navigation">
            Links
        </nav>
    </header>
  )
};
export default Navbar;