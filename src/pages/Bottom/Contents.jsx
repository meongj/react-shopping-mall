import { useState } from "react";
import TitleCarousel from "./TitleCarousel";
import ProductList from "./ProductList";
import "../../styles/pages/Bottom.css";

export default function Contents() {
  // 카테고리를 부모에서 관리해서 productlist 로 전달해준다
  const [type, setType] = useState("ALL");
  // 상품 수
  const [productCount, setProductCount] = useState(0);
  // 상품 정렬순 (기본: 최신순)
  const [productSort, setProductSort] = useState("LATEST");

  return (
    <div className="main-weekly-container">
      <div className="title">
        <h2 className="title-h2 unna-font">Bottom</h2>
        <TitleCarousel type={type} setType={setType} />
      </div>

      <div className="product-container">
        <div className="product-list-menu">
          <p className="product-total">
            {/* 총 상품 개수 */}
            TOTAL: <b> {productCount} </b> items
          </p>
          {/* 정렬 순서 */}
          <ul className="product-record">
            <li
              className="record"
              onClick={() => {
                setProductSort("LATEST");
              }}
            >
              신상품
            </li>
            <li> /</li>
            <li
              className="record"
              onClick={() => {
                setProductSort("NAME");
              }}
            >
              상품명
            </li>
            <li> /</li>
            <li
              className="record"
              onClick={() => {
                setProductSort("PRICE_ASC");
              }}
            >
              낮은가격
            </li>
            <li> /</li>
            <li
              className="record"
              onClick={() => {
                setProductSort("PRICE_DESC");
              }}
            >
              높은가격
            </li>
            <li> /</li>
            <li
              className="record"
              onClick={() => {
                setProductSort("MANUFACTURER");
              }}
            >
              제조사
            </li>
            <li> /</li>
            <li className="record">사용후기</li>
          </ul>
        </div>

        {/* 상품 리스트 */}
        <ProductList
          type={type}
          setProductCount={setProductCount}
          sort={productSort}
        />
      </div>
    </div>
  );
}
