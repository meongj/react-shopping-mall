import { useState } from "react";

// 수량 조절 counter 컴포넌트

function QuantityCounter() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    console.log("handleChange", e.target);
    const value = Number(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={handleChange}
        className="input-number"
      />
    </div>
  );
}

export default QuantityCounter;
