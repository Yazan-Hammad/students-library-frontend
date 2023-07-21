import React, { useState } from "react";
import "../css/Header.css";
import Logo from "../images/logo.png";
import HeaderSection from "../components/HeaderPage/HeaderSection";
import Link from "../components/Link";
import useBackend from "../hooks/use-backend";
import { GoPerson } from "react-icons/go";

function Header() {
  const { token, user } = useBackend();

  const sections = [
    // { label: "library", path: "/", icon: faBookOpen },
    // { label: "events", path: "/events", icon: faCalendar },
    // { label: "books", path: "/books", icon: faRightLeft },
  ];

  const [opened, openMenu] = useState(false);

  const elements = sections.map(({ label, path, icon }) => (
    <Link to={path} key={label}>
      <HeaderSection label={label} key={label} icon={icon} />
    </Link>
  ));

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo header-section">
          <img decoding="async" src={Logo} alt="Logo" className="logo" />
          <h2>Students Library</h2>
        </Link>
        {/* <nav>
          <div
            className={"toggle-menu" + (opened ? " active" : "")}
            onClick={() => {
              openMenu(!opened);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className="links">{elements}</ul>
        </nav> */}

        {token ? (
          <Link to="/profile">
            <div className="header-section">
              <GoPerson />
              Profile
            </div>
          </Link>
        ) : (
          <div className="new-acount">
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
