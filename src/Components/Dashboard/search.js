import { Select} from "antd";
import { React } from "react";
import qs from "qs";
import jsonp from "fetch-jsonp";
import { useState } from "react";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";

const SearchBox = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const handleSearch = (newValue) => {
    if (newValue) {
      fetch(newValue, setData);
    } else {
      setData([]);
    }
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  let timeout;
  let currentValue;
  const fetch = (value, callback) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    currentValue = value;
    const fake = () => {
      const str = qs.stringify({
        code: "utf-8",
        q: value,
      });
      jsonp(`https://suggest.taobao.com/sug?${str}`)
        .then((response) => response.json())
        .then((d) => {
          if (currentValue === value) {
            const { result } = d;
            const data = result.map((item) => ({
              value: item[0],
              text: item[0],
            }));
            callback(data);
          }
        });
    };
    timeout = setTimeout(fake, 300);
  };

  return (
    <>
      <Select
              showSearch
              value={value}
              placeholder={"Search"}
              style={
                collapsed
                  ? {
                      opacity: "0",
                      pointerEvents: "none",
                      transition: "0.3s ease-in-out",
                    }
                  : {
                      width: "250px",
                      opacity: "1",
                      marginRight: "12px",
                      transition: "0.3s ease-in-out",
                    }
              }
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              onSearch={handleSearch}
              onChange={handleChange}
              notFoundContent={null}
              options={(data || []).map((d) => ({
                value: d.value,
                label: d.text,
              }))}
              collapsed={collapsed}
            />

            {collapsed ? (
              <SearchOutlined
                style={{ color: "#ffffff", fontSize: "20px" }}
                onClick={() => setCollapsed(!collapsed)}
              />
            ) : (
              <CloseOutlined
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  marginLeft: "-35px",
                  zIndex: "99",
                  color: "#000000",
                }}
                onClick={() => setCollapsed(!collapsed)}
              />
            )}
    </>
  );
};

export default SearchBox;
