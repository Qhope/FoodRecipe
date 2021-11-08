import React from "react";
import "../css/FastFilter.scss";
const FastFilter = () => {
  const category = [
    "Pig",
    "Chicken",
    "Eggs",
    "Beef",
    "Potato",
    "Tomato",
    "Fish",
    "Orange",
    "Strawberry",
  ];
  return (
    <div className="tagFilter">
      {category.map((tag) => (
        <button>{tag}</button>
      ))}
    </div>
  );
};
export default FastFilter;
