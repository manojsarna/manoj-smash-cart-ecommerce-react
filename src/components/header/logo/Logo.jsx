import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="link-text-dec" title="Go To Home" to="/">
      <div id="sc-logo" className=" sm-nav-logo flex-row-wrap">
        <span className="sm-header-icon">
          <i className="fab fa-opencart"></i>
        </span>
        <span>SmashCart</span>
      </div>
    </Link>
  );
}
