import { useNavigate } from "react-router-dom";

export function Brand({ brandItem }) {
  const navigate = useNavigate();
  return (
    <div
      className="sm-main-cat-child sm-box-shad-hov"
      title={brandItem.brandName}
      onClick={() => navigate(`/products/?brand=${brandItem.brand}`)}
    >
      <img src={brandItem.image} alt="badminton" />
      <div className="sm-man-cat-text sm-grid-content ">
        <span>{brandItem.brandName}</span>
      </div>
    </div>
  );
}
