////// body
export default function Body() {
  return (
    <div className="body">
      <MainBanner></MainBanner>
      <div className="main-radius">
        <MainWeekly></MainWeekly>
      </div>
    </div>
  );
}

function MainWeekly() {
  return (
    <div className="main-weekly-container">
      <div className="title">
        <h2 className="title-h2 unna-font">Category Best Item</h2>
        <p className="title-text">카테고리별 사랑받는 상품입니다 :)</p>
        <div className="title-carousel">
          <span className="title-span">OUTER</span>
          <span className="title-span">TOP</span>
          <span className="title-span">DRESS</span>
          <span className="title-span">BOTTOM</span>
          <span className="title-span">ACC</span>
        </div>
      </div>
      <div className="main-weekly-carousel">
        <img src="../assets/best-item1.jpg" alt="" />
        <img src="../assets/images/best-item2.jpg" alt="" />
        <img src="../assets/best-item3.jpg" alt="" />
        <img src="../assets/best-item4.jpg" alt="" />
      </div>
    </div>
  );
}

///////////////// 메인 배너
function MainBanner() {
  return (
    <div className="banners">
      <div className="banner">
        <a href="/">
          <img
            className="banner-img"
            src="/assets/banner1.jpg"
            alt="배너이미지1"
          ></img>
          <b className="banner-text-top">Knit</b>
          <p className="banner-text-bottom">데이에프터 자체제작 니트</p>
        </a>
      </div>

      <div className="banner">
        <a href="/">
          <img
            className="banner-img"
            src="/assets/banner1.jpg"
            alt="배너이미지1"
          ></img>
          <b className="banner-text-top">Knit</b>
          <p className="banner-text-bottom">데이에프터 자체제작 니트</p>
        </a>
      </div>

      <div className="banner">
        <a href="/">
          <img
            className="banner-img"
            src="/assets/banner1.jpg"
            alt="배너이미지1"
          ></img>
          <b className="banner-text-top">Knit</b>
          <p className="banner-text-bottom">데이에프터 자체제작 니트</p>
        </a>
      </div>

      <div className="banner">
        <a href="/">
          <img
            className="banner-img"
            src="/assets/banner1.jpg"
            alt="배너이미지1"
          ></img>
          <b className="banner-text-top">Knit</b>
          <p className="banner-text-bottom">데이에프터 자체제작 니트</p>
        </a>
      </div>
    </div>
  );
}
