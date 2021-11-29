import React from "react";
import "./SearchSection.scss";
import { useHistory } from "react-router-dom";
import { Card, Button, Input } from "antd";
import { Row, Col } from "antd";
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
const { Meta } = Card;

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { Search } = Input;
const SearchSection = (props) => {
  const history = useHistory();
  const check = () => {
    console.log("click");
  };
  const detail = (i) => {
    let id = i;
    console.log("click");
    history.push({
      pathname: "/detail",
      search: "?id=" + id,
    });
  };
  return (
    <div>
      <div className="search">
        <span></span>
        <Search />
      </div>
      <div className="card">
        {a.map((i) => (
          <Card
            key={i}
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
            onClick={() => {
              detail(i);
            }}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
              className="description"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default SearchSection;
