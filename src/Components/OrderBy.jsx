import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../CSS/OrderBy.css";

const OrderBy = ({ setOrderBy }) => {
  const handleOrderByChange = (event) => {
    if (event.target.value === "Ascending") {
      setOrderBy("ASC");
    } else {
      setOrderBy("DESC");
    }
  };

  return (
    <div className="order_by">
      <label className="order_by--label">Order By:</label>
      <select className="order_by--select" onChange={handleOrderByChange}>
        <option className="order_by--option">Desending</option>
        <option className="order_by--option">Ascending</option>
      </select>
    </div>
  );
};

export default OrderBy;
