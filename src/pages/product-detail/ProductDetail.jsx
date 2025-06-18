import { useParams } from "react-router-dom";
import "../../styles/pages/productDetail.css";
import Header from "../../componets/Header";
import ProductDetailHeader from "./ProductDetailHeader";

export default function ProductDetail() {
  const { id } = useParams(); // url 에서 product id 추출

  return (
    <div className="product-detail">
      <Header />
      {/* // 상단 상품 영역 */}
      <ProductDetailHeader id={id} />
      {/* // 상품 디테일 샷 (탭) 
    //   푸터 */}
    </div>
  );
}
