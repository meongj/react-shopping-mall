export default function Carousel() {
  return (
    <div className="carousel">
      <button className="carousel-btn prev">
        {" "}
        <i class="fa-solid fa-chevron-left"></i>{" "}
      </button>

      <div className="carousel-track-container">
        <div className="carousel-slide current-slide">
          <a href="/">
            <img src="/assets/carousel1.jpg" alt="" />
            <div className="inner-text">
              <h1>denim jacket</h1>
              <p>간절기에 입기 좋은 데님 자켓으로 툭 걸치기 좋아요 :)</p>
              <p>[3color]</p>
            </div>
          </a>
        </div>
      </div>

      <button className="carousel-btn next">
        {" "}
        <i class="fa-solid fa-chevron-right"></i>{" "}
      </button>
    </div>
  );
}
