import { combineReducers } from "redux";
import salesBillReducer from "./sales_bill/sales_bill_reducer";
const rootReducer = combineReducers({
  salesBill: salesBillReducer,
});

export default rootReducer;
