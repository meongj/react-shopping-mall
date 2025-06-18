function ProductDetailHeader({ id }) {
  return (
    <div className="product-detail-hd">
      <div className="thumbnail">
        <img className="prd-detail-img" src="/assets/best-item1.jpg" alt={id} />
      </div>

      <div className="prd-hd-title">
        <h3>트위드 자켓</h3>
        <hr />
        <div>판매가 어쩌구</div>
        <hr />
        <div>총 상품금액(수량): 0 (0개)</div>
        <hr />
        <div className="prd-detail-hd-btn">
          <button>하트</button>
          <button>CART</button>
          <button>BUY IT NOW</button>
        </div>
        <div>
          <b>comment</b>
          <p>
            상품간략설명에 적어주신 내용이 이곳에 보여집니다. 상품 이미지
            사이즈는 업로드하시는 이미지에 따라 자동으로 비율이 조정되어
            보여집니다. 디자인관련하여 문의/수정사항 상담은 데이디자인으로
            와주세요 :) * 상품의 간단한 소개문구 및 사이즈, 소재, 모델
            사이즈등을 적어주시면 좋습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailHeader;
