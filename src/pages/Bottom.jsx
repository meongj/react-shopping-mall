import { useState, useEffect } from "react";
import Header from "../componets/Header";
import "../styles/pages/Bottom.css";
import { formatPrice } from "../utils/format";

export default function Bottom() {
  return (
    <>
      <Header />
      <Contents />
    </>
  );
}

function Contents() {
  return (
    <div className="main-weekly-container">
      <div className="title">
        <h2 className="title-h2 unna-font">Bottom</h2>
        <div className="title-carousel">
          <span className="title-span">ALL</span>
          <span className="title-span">데님</span>
          <span className="title-span">팬츠</span>
          <span className="title-span">스커트</span>
        </div>
      </div>

      <div className="product-container">
        <div className="product-list-menu">
          <p className="product-total">TOTAL: 4 items</p>
          <ul className="product-record">
            <li>신상품</li>
            <li> /</li>
            <li>상품명</li>
            <li> /</li>
            <li>낮은가격</li>
            <li> /</li>
            <li>높은가격</li>
            <li> /</li>
            <li>제조사</li>
            <li> /</li>
            <li>사용후기</li>
          </ul>
        </div>

        <div className="product-grid">
          {/* 상품 리스트 */}
          <ProductList />
        </div>
      </div>
    </div>
  );
}

// 서버에서 상품조회 데이터 가져오기
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // api 호출 함수
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        if (!response.ok) {
          throw new Error("API 호출 실패");
        }

        const data = await response.json();
        console.log(data);

        setProducts(data);
      } catch (error) {
        console.error("상품 데이터 fetch 실패", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((item, idx) => {
        return (
          <div className="product" key={idx}>
            {/* <img className="prd-img" src="../assets/best-item1.jpg" alt="" /> */}
            <img className="prd-img" src={item.imgUrl} alt="" />
            <strong>
              {/* <a href="/">트위드 자켓</a> */}
              <a href="/">{item.name}</a>
            </strong>

            <ul className="description">
              <li title="할인판매가" className="price-info">
                <div className="price-div">
                  {/* 할인가 */}
                  <span className="price">
                    {formatPrice(item.discountedPrice)} 원
                  </span>
                  {/* 판매가 */}
                  <span className="price discount">
                    {formatPrice(item.price)} 원
                  </span>
                </div>
                <span className="discount-percent">{item.discount} %</span>
              </li>
              <li title="상품요약정보" className="prd-info">
                <span>{item.description}</span>
              </li>
              <li title="상품색상"></li>
            </ul>
            <div>icon</div>
          </div>
        );
      })}
    </>
  );
}
