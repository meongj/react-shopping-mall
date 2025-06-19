import QuantityCounter from "../../componets/QuantityCounter";
import { formatPrice } from "../../utils/format";

function ProductDetailHeader({ product }) {
  let salePriceDiff = product.price - product.discountedPrice;

  return (
    <div className="product-detail-hd">
      <div className="thumbnail">
        <img
          className="prd-detail-img"
          src={product.imgUrl}
          alt={product.name}
        />
      </div>

      <div className="prd-hd-title">
        <h2 className="prd-name">
          {product.name} &nbsp;
          <img src="/public/assets/product/basic-tag.gif" alt="" />
          <img src="/public/assets/product/best-tag.gif" alt="" />
        </h2>
        <hr />
        {/*테이블 */}
        <div>
          <table className="prd-info-table">
            <tbody>
              <tr>
                <td className="prd-info-col-1 prd-info-cell align-top">
                  <b> 판매가</b>
                </td>
                <td className="prd-info-col-2 prd-info-cell align-top">
                  {formatPrice(product.price)}
                </td>
              </tr>
              <tr>
                <td className="prd-info-col-1 prd-info-cell align-top">
                  <b> 할인판매가</b>
                </td>
                <td className="prd-info-col-2 prd-info-cell align-top">
                  <b> {formatPrice(product.discountedPrice)}원</b>{" "}
                  <b className="sale-txt">
                    ({formatPrice(salePriceDiff)}원 할인)
                  </b>
                </td>
              </tr>
              <tr className="prd-info-col-1 prd-info-cell align-top">
                <td> 할인 기간</td>
                <td className="prd-info-col-2 prd-info-cell align-top">
                  {/* yyyy-mm-dd 01:55:15 시작일자와 종료일자 사이 차이 계산 */}
                  <span className="sale-left-time">
                    남은 시간 500일 01:55:15 ({formatPrice(salePriceDiff)}원
                    할인)
                    <br />
                  </span>
                  <span className="sale-period">
                    {/* todo 없는 경우는? 
                        해외에서 접근 할경우?
                        */}
                    {product.saleStartDate} ~ {product.saleEndDate}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="prd-info-col-1 prd-info-cell align-top">색상</td>
                <td className="prd-info-col-2 prd-info-cell align-top">
                  <ul className="square-list">
                    <li>
                      <a></a>
                    </li>
                    <li></li>
                    <li></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        {/* 색상 누르면 아이템 추가되는 영역 */}
        <div>
          <table className="prd-add-table">
            <tbody>
              <tr>
                <td className="prd-add-col-1">
                  <p>
                    <b>트위드 자켓</b>
                    <br />- <span>아이보리</span>
                  </p>
                </td>
                <td className="prd-add-col-2">
                  <QuantityCounter />

                  <button>x</button>
                </td>

                <td className="prd-add-col-3">
                  <b> 10,000원</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <div>
          {/* 색상 추가했을때 수량, 합계 증가 */}
          <b>총 상품금액</b>(수량): <b className="total-price">0원</b> (0개)
        </div>
        <hr />
        <div className="prd-detail-hd-btn">
          <button className="btn-heart">하트</button>
          <button className="btn-cart">CART</button>
          <button className="btn-buy">BUY IT NOW</button>
        </div>
        <div className="comment">
          <b>comment</b>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailHeader;
