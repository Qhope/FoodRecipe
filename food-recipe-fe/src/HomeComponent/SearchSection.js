import Category from "./Category";
import Tabs from "./Tabs";
import "./SearchSection.scss";
const SearchSection = () => {
  return (
    <div>
      <div className="item">
        <Tabs className="tabs" />
        <Category />
      </div>
      <div className="divider" />
    </div>
  );
};
export default SearchSection;
