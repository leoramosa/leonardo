import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './styles/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
            <li>
              <Link
                className="dropdown-link"
                onClick={() => setClick(false)}
              >
                Español
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                onClick={() => setClick(false)}
              >
                English
              </Link>
            </li>
      </ul>
    </>
  );
}

export default Dropdown;