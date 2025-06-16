import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="top-header">
        <div className="top-header-left">
          <button className="top-header-left-btn">
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          {/* 드롭다운 */}
          <ul>01.드롭다운</ul>
        </div>
        <div className="top-header-right">
          <button className="top-header-right-btn">JOIN US</button>
          <button className="top-header-right-btn">LOGIN</button>
          <button className="top-header-right-btn">CART</button>
          <button className="top-header-right-btn">ORDER</button>
          <button className="top-header-right-btn">MY PAGE</button>
        </div>
      </div>

      <div className="bottom-header">
        <h2 className="mall-name">Day After</h2>
        <div className="btn-container">
          <button className="header-btn"> OUTER</button>
          <button className="header-btn"> TOP</button>
          <button className="header-btn"> DRESS</button>
          <Link to="/bottom" className="header-btn">
            {" "}
            <p>BOTTOM</p>
          </Link>
          <button className="header-btn"> ACESSORY</button>
          <button className="header-btn"> SHOES&BAG</button>
          <button className="header-btn"> SALE</button>
          <button className="header-btn"> ONLY U</button>
          <button className="header-btn"> COMMUNITY</button>
        </div>
        <div className="bottom-header-right">
          <input type="text"></input>
          <button className="header-btn">
            {" "}
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </header>
  );
}
