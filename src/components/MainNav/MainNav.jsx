import React from "react";
import { Link } from "gatsby";
import {
  FaTelegramPlane,
  FaAlignRight,
  FaHome,
  FaBriefcase,
  FaPenSquare,
  FaTimes,
  FaUserAlt
} from "react-icons/fa";
import "./MainNav.css";

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: "c-main-nav__link--is-active" }
    : { className: "c-main-nav__link" };
};

const PartialNavLink = props => (
  <Link getProps={isPartiallyActive} {...props}>
    {props.children}
  </Link>
);

const ListLink = props => (
  <li className="c-main-nav__elem">
    <Link
      to={props.to}
      className="c-main-nav__link"
      activeClassName="c-main-nav__link--is-active"
      exact="true"
      onClick={props.closeMenu}
    >
      {props.children}
    </Link>
  </li>
);

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      links: [
        { to: "/", text: "home", icon: FaHome },
        { to: "/about/", text: "about me", icon: FaUserAlt },
        { to: "/#projects", text: "portfolio", icon: FaBriefcase },
        { to: "/blog/", text: "blog", icon: FaPenSquare },
        { to: "/#contact", text: "contact", icon: FaTelegramPlane }
      ],
      mainNavModifierClassName: "",
      mobileDetailsNav: null
    };
  }

  closeMenu() {
    console.log("closeMenu()");
    if (this.state.mobileDetailsNav) {
      this.setState(() => ({
        mainNavModifierClassName: "",
        mobileDetailsNav: null
      }));
    }
  }

  toggleMenu() {
    let mobileDetailsNav = null;
    let mainNavModifierClassName = "";

    if (!this.state.mobileDetailsNav) {
      mobileDetailsNav = (
        <div className="c-main-nav c-main-nav--is-open">
          {this.state.links.map((link, i) => (
            <ListLink closeMenu={this.closeMenu} to={link.to} key={i}>
              <link.icon />
              <span className="c-main-nav__text">{link.text}</span>
            </ListLink>
          ))}
        </div>
      );
      mainNavModifierClassName = "c-main-nav--is-hidden";
    }

    this.setState(() => ({
      mainNavModifierClassName: mainNavModifierClassName,
      mobileDetailsNav: mobileDetailsNav
    }));
  }

  render() {
    return (
      <div>
        <ul className={`c-main-nav ${this.state.mainNavModifierClassName}`}>
          {this.state.links.map((link, i) => (
            <ListLink to={link.to} key={i} testLink={this.testLink}>
              <link.icon />
              <span className="c-main-nav__text">{link.text}</span>
            </ListLink>
          ))}
          <li
            className="c-main-nav__elem c-main-nav__elem--close-link"
            onClick={this.toggleMenu}
          >
            <a href="#" className="c-main-nav__link">
              {this.state.mainNavModifierClassName ? (
                <FaTimes />
              ) : (
                <FaAlignRight />
              )}
              <span className="c-main-nav__text">Close</span>
            </a>
          </li>
        </ul>
        {this.state.mobileDetailsNav}
      </div>
    );
  }
}

export default MainNav;
