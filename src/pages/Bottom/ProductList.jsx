import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import ProductItem from "./ProductItem";

// 서버에서 상품조회 데이터 가져오기
export default function ProductList({ type, setProductCount, sort }) {
  const [products, setProducts] = useState([]);
  // 페이지네이션
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // api 호출 함수
  const fetchProducts = useCallback(
    async (selectedPage = 0) => {
      try {
        const params = new URLSearchParams({
          type: type,
          sort: sort,
          size: 2,
          page: selectedPage,
        });
        const response = await fetch(
          `http://localhost:8080/api/products?${params}`
        );

        if (!response.ok) {
          throw new Error("API 호출 실패");
        }

        const data = await response.json();
        console.log(data);

        // 상품리스트
        setProducts(data.content);
        // 상품개수
        setProductCount(data.totalElements); // 부모 상태 변경
        /* 페이지 네이션 */
        // 전체 페이지 수
        setPageCount(data.totalPages || 0);
      } catch (error) {
        console.error("상품 데이터 fetch 실패", error);
      }
    },
    [type, sort, setProductCount] // type이 변경될때마다 호출
  );

  useEffect(() => {
    setCurrentPage(0);
  }, [type, sort]);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, fetchProducts]);

  // useEffect(() => {
  //   setCurrentPage(0); // 현재 페이지 초기화
  //   fetchProducts(0); // type 변경시 첫 페이지 부터 보이기
  // }, [fetchProducts]); // 이제 fetchProducts는 type이나 sort가 바뀔 때만 변경, useCallback => 메모이제이션

  // 페이지네이션 data fetch
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage); // 현재 페이지 바로 갱신
    // fetchProducts(selectedPage); // 다시 요청
  };

  return (
    <div className="product-content">
      <div className="product-grid1">
        {products.map((item, idx) => (
          <div className="product" key={idx}>
            <ProductItem item={item} />
          </div>
        ))}
      </div>
      {/* 페이지네이션 */}
      {pageCount > 0 && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount} // 페이지 총 개수
          forcePage={currentPage} // 현재 페이지
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </div>
  );
}
