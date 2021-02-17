import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <React.Fragment>
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments />
            </li>
            <li>{this.props.auth.userName}</li>
            <li style={{ margin: "0 10px" }}>
              credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/api/logout">Log Out</a>
            </li>
          </React.Fragment>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(Header);
