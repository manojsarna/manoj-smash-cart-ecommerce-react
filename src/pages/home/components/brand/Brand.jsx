import { brands } from "../../../../data/brand-data";

export function Brand({ brandItem }) {
  return (
    <div
      className="sm-main-cat-child sm-box-shad-hov"
      title={brandItem.brandName}
    >
      <img src={brandItem.image} alt="badminton" />
      <div className="sm-man-cat-text sm-grid-content ">
        <span>{brandItem.brandName}</span>
      </div>
    </div>
  );
}
