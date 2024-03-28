import { Button } from "react-bootstrap";
import { axiosPrivate } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SidebarAdmin = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    axiosPrivate.get("/auth/logout").then((res) => {
      console.log("Logged Out");
      setAuth({ accessToken: "", refreshToken: "", user: {} });
      navigate("/login", { replace: true });
    });
  };
  return (
    <>
      {auth.user.role === "ADMIN" && (
        <div className="dashboard_sidebar_menu dn-992">
          <ul className="sidebar-menu">
            <li className="header">
              <img
                src="/images/logo/g.png"
                alt="header-logo2.png"
                height="30px"
                width="30px"
              ></img>{" "}
              WareHouseTracker
            </li>
            <li className="title">
              <span>Main</span>
            </li>
            <li className="treeview">
              <a href="/summary">
                <i className="flaticon-layers"></i>
                <span> Dashboard</span>
              </a>
            </li>
            <li className="title">
              <span>Manage Items</span>
            </li>
            <li>
              <a href="/item">
                <i className="flaticon-home"></i> <span>View All Items</span>
              </a>
            </li>
            <li>
              <a href="/additem">
                <i className="flaticon-home"></i> <span>Add New Item</span>
              </a>
            </li>
            <li className="title">
              <span>Manage Employee</span>
            </li>
            <li>
              <a href="/employee">
                <i className="flaticon-home"></i>{" "}
                <span>View All Employees</span>
              </a>
            </li>
            <li>
              <a href="/addemployee">
                <i className="flaticon-home"></i> <span>Add New Employee</span>
              </a>
            </li>

            <li>
              <li className="title">
                <Button danger onClick={logout}>
                  <i className="flaticon-logout"></i> <span>Logout</span>
                </Button>
              </li>
            </li>
          </ul>
        </div>
      )}
      {auth.user.role === "EMPLOYEE" && (
        <div className="dashboard_sidebar_menu dn-992">
          <ul className="sidebar-menu">
            <li className="header">
              <img
                src="/images/logo/w.png"
                alt="header-logo2.png"
                height="30px"
                width="30px"
              ></img>{" "}
              WareHouseTracker
            </li>
            <li className="title">
              <span>Main</span>
            </li>
            <li className="treeview">
              <a href="/summary">
                <i className="flaticon-layers"></i>
                <span> Dashboard</span>
              </a>
            </li>
            <li className="title">
              <span>Manage Sales</span>
            </li>
            <li>
              <a href="/sales">
                <i className="flaticon-home"></i> <span>View Sales</span>
              </a>
            </li>
            <li>
              <li className="title">
                <Button danger onClick={logout}>
                  <i className="flaticon-logout"></i> <span>Logout</span>
                </Button>
              </li>
            </li>
          </ul>
        </div>
      )}
      {auth.user.role === "CUSTOMER" && (
        <div className="dashboard_sidebar_menu dn-992">
          <ul className="sidebar-menu">
            <li className="header">
              <img
                src="/images/logo/w.png"
                alt="header-logo2.png"
                height="30px"
                width="30px"
              ></img>{" "}
              WareHouseTracker
            </li>
            <li className="title">
              <span>Main</span>
            </li>
            <li className="treeview">
              <a href="/summary">
                <i className="flaticon-layers"></i>
                <span> Dashboard</span>
              </a>
            </li>
            <li className="title">
              <span>Manage Orders</span>
            </li>
            <li>
              <a href="/orders">
                <i className="flaticon-home"></i> <span>View Orders</span>
              </a>
            </li>
            <li>
              <li className="title">
                <Button danger onClick={logout}>
                  <i className="flaticon-logout"></i> <span>Logout</span>
                </Button>
              </li>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarAdmin;
