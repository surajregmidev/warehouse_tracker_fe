import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const HomeSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // window.location.replace(`http://localhost:3000/map#0?query=${query}`);
    navigate(`/map?query=${query}`);
  };
  return (
    <section className="home-seven">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-10 offset-lg-1">
            <div className="home_content home7">
              <div className="home-text text-center">
                <h3 className="fz55">WareHouse Sales Tracker</h3>
                <p className="fz18 color-white" style={{ fontSize: "20px" }}>
                  Optimize your inventory management with our intuitive
                  warehouse sales tracking app - streamline operations and boost
                  profitability effortlessly!
                </p>
              </div>
              <div className="home_adv_srch_opt home7">
                <div className="home1-advnc-search home7">
                  <ul className="h1ads_1st_list mb0 text-center">
                    <li className="list-inline-item">
                      <div className="search_option_two">
                        <div className="candidate_revew_select"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSearch;
