import { useNavigate } from "react-router-dom";

export function Category({ categoryItem }) {
  const navigate = useNavigate();
  return (
    <div
      className="sm-main-cat-child sm-box-shad-hov"
      title={categoryItem.categoryName}
      onClick={() => navigate(`/products/?category=${categoryItem.category}`)}
    >
      <img src={categoryItem.image} alt="badminton" />
      <div className="sm-man-cat-text sm-grid-content ">
        <span>{categoryItem.categoryName}</span>
      </div>
    </div>
  );
}
