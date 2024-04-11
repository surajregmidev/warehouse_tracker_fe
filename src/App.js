import HomePage from "./pages/home/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Summary from "./pages/dashboard/summary";
import { AuthProvider } from "./context/AuthProvider";
import PersistLogin from "./auth/persistLogin";
import RequireAuth from "./auth/requireAuth";
import Layout from "./pages/home/layout";
import ListProject from "./pages/dashboard/list-project";
import AddProject from "./pages/dashboard/add-project";
import ScrollToTop from "./ScrollToTop";
import EditProject from "./pages/dashboard/edit-project";
import "./App.css";

import TermOfService from "./pages/ten-things/term-of-services";
import PrivacyPolicy from "./pages/ten-things/privacy-policy";
import AboutUs from "./pages/ten-things/about-us";
import AddEmployee from "./pages/dashboard/add-employee";
import ListEmployee from "./pages/dashboard/list-employee";
import PurchaseBillCreate from "./pages/dashboard/purchase_bill_create";
import ListOrders from "./pages/dashboard/list-order";
import ListSales from "./pages/dashboard/list-sales";
import ListItem from "./pages/dashboard/list-item";
import EditItemDefect from "./pages/dashboard/edit-item-defect";

function App() {
  // return <HomePage></HomePage>;
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/term-of-service" element={<TermOfService />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route element={<Dashboard />}>
                  <Route path="/item" element={<ListProject />}></Route>
                  <Route path="/itememp" element={<ListItem />}></Route>
                  <Route path="/additem" element={<AddProject />}></Route>
                  <Route path="/employee" element={<ListEmployee />}></Route>
                  <Route path="/addemployee" element={<AddEmployee />}></Route>
                  <Route path="/summary" element={<Summary />}></Route>
                  <Route
                    path="/purchasebill"
                    element={<PurchaseBillCreate />}
                  ></Route>
                  <Route path="/orders" element={<ListOrders />}></Route>
                  <Route path="/sales" element={<ListSales />}></Route>
                  <Route
                    path="/item/edit/:id"
                    element={<EditProject />}
                  ></Route>
                  <Route
                    path="/itemdefect/edit/:id"
                    element={<EditItemDefect />}
                  ></Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        </ScrollToTop>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
