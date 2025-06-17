// 카데고리 필터

export default function TitleCarousel({ type, setType }) {
  // 클릭을 하면 category 값이 파라미터로 들어가서 api 호출함

  function handleTypeChange(newType) {
    setType(newType);
  }

  return (
    <div className="title-carousel">
      <span
        className={`title-span ${type === "ALL" ? "active" : ""}`}
        onClick={() => handleTypeChange("ALL")}
      >
        ALL
      </span>
      <span
        className={`title-span ${type === "DENIM" ? "active" : ""}`}
        onClick={() => handleTypeChange("DENIM")}
      >
        데님
      </span>
      <span
        className={`title-span ${type === "PANTS" ? "active" : ""}`}
        onClick={() => handleTypeChange("PANTS")}
      >
        팬츠
      </span>
      <span
        className={`title-span ${type === "SKIRTS" ? "active" : ""}`}
        onClick={() => handleTypeChange("SKIRTS")}
      >
        스커트
      </span>
    </div>
  );
}
