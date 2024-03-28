import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
const Summary = () => {
  const [items, setItems] = useState([]);
  const [employees, setEmployees] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  const { auth } = useAuth();

  useEffect(() => {
    async function fetchData() {
      if (auth.user.role === "ADMIN") {
        console.log("In fetchData");
        const response = await axiosPrivate.get("/item");
        const itemsdata = response.data.data;
        console.log("itemsdata");
        console.log(itemsdata);
        setItems(itemsdata.length);

        const response2 = await axiosPrivate.get("/auth/get-emplyee");
        const employeeData = response2.data.data;
        console.log("employeeData");
        console.log(employeeData);
        setEmployees(employeeData.length);
      }
    }
    fetchData();
  }, [auth.user.role, axiosPrivate]);

  return (
    <>
      {auth.user.role === "ADMIN" && (
        <section
          className="our-dashbord dashbord bgc-f7 pb50"
          style={{ marginLeft: "50px" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-xl-2 dn-992 pl0"></div>
              <div className="col-lg-9 col-xl-10 maxw100flex-992">
                <div className="row">
                  <div className="col-lg-12 mb10">
                    <div className="breadcrumb_content style2">
                      <h2 className="breadcrumb_title">
                        Howdy, {auth.user.email}
                      </h2>
                      <p>We are glad to see you again!</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="ff_one">
                      <div className="icon">
                        <span className="flaticon-home"></span>
                      </div>
                      <div className="detais">
                        <div className="timer">{items}</div>
                        <p>All Items</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="ff_one style2">
                      <div className="icon">
                        <span className="flaticon-view"></span>
                      </div>
                      <div className="detais">
                        <div className="timer">{employees}</div>
                        <p>All Employees</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="ff_one style2">
                      <div className="icon">
                        <span className="flaticon-view"></span>
                      </div>
                      <div className="detais">
                        <div className="timer">0</div>
                        <p>All Sales</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt50">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="copyright-widget text-center">
                      <p>© 2020 WareHouseTracker. Made with love.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Summary;
