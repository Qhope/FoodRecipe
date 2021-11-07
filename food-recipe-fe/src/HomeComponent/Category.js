import "./Category.scss";
const Category = (props) => {
  return (
    <div className="category">
      <a className="category__items category__items--active">New Recipes</a>
      <a className="category__items">Featured Recipes</a>
      <a className="category__items">Best Recipes</a>
    </div>
  );
};
export default Category;
