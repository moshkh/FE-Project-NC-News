import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../CSS/OrderBy.css";

const OrderBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.append("order_by", "DESC");
  }, [searchParams]);

  const handleOrderByChange = (event) => {};

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
