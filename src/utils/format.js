/**
 * 한국식 천 단위 콤마 자동으로 포맷팅
 */
export function formatPrice(price) {
    if (typeof price !== "number") return price;
    return price.toLocaleString("ko-KR");
}