import React from "react";
import "./SearchSection.scss";
import { useHistory } from "react-router-dom";
import { Card, Button, Input } from "antd";
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
const { Meta } = Card;

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { Search } = Input;
const SearchSection = (props) => {
  const history = useHistory();
  const check = () => {
    console.log("click");
  };
  const detail = (e) => {
    console.log("click");
    history.push("/Detail");
  };
  return (
    <div>
      <div className="search">
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
            onClick={detail}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
              className="description"
            />
            <div className="react">
              <Button
                onClick={check}
                icon={<AiOutlineLike className="icon" />}
              ></Button>
              <Button
                onClick={console.log("Heart")}
                icon={<AiOutlineHeart className="icon" />}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default SearchSection;
