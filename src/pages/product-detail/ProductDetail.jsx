import { useParams } from "react-router-dom";
import "../../styles/pages/productDetail.css";
import Header from "../../componets/Header";
import ProductDetailHeader from "./ProductDetailHeader";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams(); // url 에서 product id 추출
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const res = await fetch(`http://localhost:8080/api/product/${id}`);
        if (!res.ok) throw new Error("상품 조회 실패");

        const data = await res.json(); //json() :비동기 함수 -> Promise 객체
        console.log("data", data);
        setProduct(data);
      } catch (err) {
        console.error("상세페이지 fetch error", err);
      }
    }
    fetchProductDetail();
  }, [id]); // id가 변했을때 호출함

  // 데이터가 안 왔을 경우 로딩 처리
  if (!product) return <div>로딩중 ...🐢</div>;

  return (
    <div className="product-detail">
      <Header />
      {/* // 상단 상품 영역 */}
      <ProductDetailHeader product={product} />
      {/* // 상품 디테일 샷 (탭) 
    //   푸터 */}
    </div>
  );
}
