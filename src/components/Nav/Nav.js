import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  
    console.log("****props", props)

    return (
      <section id="Nav">
        <h2>
          <a href="/">
              Brandon Peterson Portfolio
          </a>
        </h2>
        <header className="flex-row px-1">
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <Link to="/">
                  About me
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/ContactForm">
                  Contact Me
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/Portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/Resume">
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
      );
    }
    
    export default Nav;