import { formatPrice } from "../../utils/format";

export default function ProductItem({ item }) {
  return (
    <div className="product">
      <img className="prd-img" src={item.imgUrl} alt={item.name} />
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
            <span className="price discount">{formatPrice(item.price)} 원</span>
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
}
