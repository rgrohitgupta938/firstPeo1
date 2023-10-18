import React, { Component } from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faGauge,
  faUserFriends,
  faWallet,
  faAd,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
class LeftPanel extends Component {
  render() {
    return (
      <div className="container left-panel">
        <h4 className="text-white p-3">
          <FontAwesomeIcon icon={faCog} className="pe-3" />
          Dashboard
        </h4>
        <ul>
          <li className="active rounded">
            <FontAwesomeIcon
              icon={faGauge}
              style={{ color: "#c6c8cd" }}
              className="pe-3"
            />
            Dashboard
          </li>
          <li>
            <i className="fas fa-shopping-bag pe-3"></i>Product
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUserFriends}
              style={{ color: "#c6c8cd" }}
              className="pe-3"
            />
            Customers
          </li>
          <li>
            <FontAwesomeIcon
              icon={faWallet}
              style={{ color: "#c6c8cd" }}
              className="pe-3"
            />
            Income
          </li>
          <li>
            <FontAwesomeIcon
              icon={faAd}
              style={{ color: "#c6c8cd" }}
              className="pe-3"
            />
            Promote
          </li>
          <li>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{ color: "#c6c8cd" }}
              className="pe-3"
            />
            Help
          </li>
        </ul>
        <div className="row p-0 m-0 cont rounded" style={{ marginTop: "20px" }}>
          <div className="col-3 p-2">
            <img
              src="https://th.bing.com/th/id/R.c6ce4ef394413869bb06283db819c628?rik=dsxV%2b0CdNNsOmA&riu=http%3a%2f%2fsfsco.net%2fwp-content%2fuploads%2f2016%2f04%2f6140989632_1c8066563d_b.jpg&ehk=uLWHPAmp35gMcoEmYFZKjh1wg8vpPdCZcGGtPh72e7w%3d&risl=&pid=ImgRaw&r=0"
              className="img-fluid rounded"
              width="40px"
            />
          </div>
          <div className="col-7">
            <span className="text-white fw-bold">Evano</span>
            <br />
            <span className="txt1">Project Manager</span>
          </div>
          <div className="col-1 col1 text-secondary">⌄</div>
        </div>
      </div>
    );
  }
}
export default LeftPanel;
