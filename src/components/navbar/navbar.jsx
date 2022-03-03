/* eslint-disable jsx-a11y/anchor-is-valid */

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

const NavBar = () => {
  const caseNumberRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const caseNumber = caseNumberRef.current.value;

    if (parseInt(caseNumber) > 0) {
      navigate(`/case/${caseNumber}`);
      caseNumberRef.current.value = null;
    }
  };
  return (
    <nav
    className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/logotext.png" alt="logotext"></img>
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" id="navbarBasicExample">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="control">
              <input
                ref={caseNumberRef}
                className="input"
                type="number"
                placeholder="Case Number"
              ></input>
            </div>
          </div>
          <div className="navbar-item">
            <button className="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
