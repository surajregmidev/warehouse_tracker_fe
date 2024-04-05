import * as actionTypes from "./sales_bill_type";
import update from "immutability-helper";
import { roundOffToTwo } from "../../util/NumberHelper";

const INITIAL_STATE = {
  salesBillLines: [],
};

const salesBillReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_SALES_BILL:
      const itemId = action.payload.item.id;
      const lineNo = action.payload.lineNo;

      const inSalesBill = state.salesBillLines.find((salesBillLine) =>
        salesBillLine.item.id === itemId ? true : false
      );

      const overrideLineNo = state.salesBillLines.find((salesBillLine) =>
        salesBillLine.lineNo === lineNo ? true : false
      );

      const salesBillLine = {
        lineNo: lineNo,
        item: action.payload.item,
        rate: action.payload.item.sellingprice,
      };

      console.log("overrideLineNo " + overrideLineNo);
      if (overrideLineNo) {
        return {
          ...state,
          salesBillLines: state.salesBillLines.map((s) => {
            if (s.lineNo === lineNo) {
              return {
                ...s,
                lineNo: lineNo,
                item: action.payload.item,
                rate: action.payload.item.sellingprice,
                lineTotal:
                  s.quantity * roundOffToTwo(action.payload.item.sellingprice),
              };
            }
            // return s;
          }),
        };
      }
      return {
        ...state,
        salesBillLines: inSalesBill
          ? [...state.salesBillLines]
          : [...state.salesBillLines, salesBillLine],
      };
    case actionTypes.ADJUST_QUANTITY:
      const itemId_ = action.payload.item.id;
      const quantity = action.payload.quantity;

      const inSalesBill_ = state.salesBillLines.find((salesBillLine) =>
        salesBillLine.item.id === itemId_ ? true : false
      );

      return {
        ...state,
        salesBillLines: inSalesBill_
          ? state.salesBillLines.map((salesBillLine) =>
              itemId_ === salesBillLine.item.id
                ? {
                    ...salesBillLine,
                    quantity: quantity,
                    lineTotal: roundOffToTwo(quantity * salesBillLine.rate),
                  }
                : salesBillLine
            )
          : [],
        salesBillTotal: {
          ...state.salesBillTotal,
        },
      };

    case actionTypes.ADJUST_DISCOUNT_AMOUNT:
      const itemId__ = action.payload.item.id;
      const adjustedDiscountAmount = action.payload.adjustedDiscountAmount;
      const inSalesBill__ = state.salesBillLines.find((salesBillLine) =>
        salesBillLine.item.id === itemId__ ? true : false
      );

      return {
        ...state,
        salesBillLines: inSalesBill__
          ? state.salesBillLines.map((salesBillLine) =>
              itemId__ === salesBillLine.item.id
                ? {
                    ...salesBillLine,
                    adjustedDiscountPercentage: roundOffToTwo(
                      (adjustedDiscountAmount / salesBillLine.rate) * 100
                    ),
                    adjustedDiscountAmount: adjustedDiscountAmount,
                    lineTotal: roundOffToTwo(
                      (salesBillLine.rate - adjustedDiscountAmount) *
                        salesBillLine.quantity
                    ),
                  }
                : salesBillLine
            )
          : [],
      };

    case actionTypes.ADJUST_DISCOUNT_PERCENTAGE:
      const itemId___ = action.payload.item.id;
      const adjustedDiscountPercentage =
        action.payload.adjustedDiscountPercentage;
      const inSalesBill___ = state.salesBillLines.find((salesBillLine) =>
        salesBillLine.item.id === itemId___ ? true : false
      );
      return {
        ...state,
        salesBillLines: inSalesBill___
          ? state.salesBillLines.map((salesBillLine) =>
              itemId___ === salesBillLine.item.id
                ? {
                    ...salesBillLine,
                    adjustedDiscountPercentage: adjustedDiscountPercentage,
                    adjustedDiscountAmount: roundOffToTwo(
                      (adjustedDiscountPercentage / 100) * salesBillLine.rate
                    ),
                    lineTotal: roundOffToTwo(
                      salesBillLine.quantity *
                        (salesBillLine.rate -
                          (adjustedDiscountPercentage / 100) *
                            salesBillLine.rate)
                    ),
                  }
                : salesBillLine
            )
          : [],
      };

    case actionTypes.ADJUST_UNIT:
      const itemId____ = action.payload.item.id;
      const adjustedUnit = action.payload.adjustedUnit;
      const inSalesBill____ = state.salesBillLines.find((salesBillLine) =>
        salesBillLine.item.id === itemId____ ? true : false
      );

      const itemUnitRate = action.payload.item.itemUnitRates.find(
        (itemUnitRate) => {
          return itemUnitRate.unit.name == action.payload.adjustedUnit;
        }
      );

      return {
        ...state,
        salesBillLines: inSalesBill____
          ? state.salesBillLines.map((salesBillLine) =>
              itemId____ === salesBillLine.item.id
                ? {
                    ...salesBillLine,
                    adjustedUnit: adjustedUnit,
                    discountRate:
                      itemUnitRate.curSellingPrice -
                      (itemUnitRate.curDiscountPrice / 100) *
                        itemUnitRate.curSellingPrice,
                    rate: itemUnitRate.curSellingPrice,
                    lineTotal:
                      salesBillLine.quantity *
                      (itemUnitRate.curSellingPrice -
                        (itemUnitRate.curDiscountPrice / 100) *
                          itemUnitRate.curSellingPrice),
                  }
                : salesBillLine
            )
          : [],
        salesBillTotal: {
          ...state.salesBillTotal,
        },
      };

    case actionTypes.REMOVE_FROM_SALES_BILL:
      return {
        ...state,
        salesBillLines: state.salesBillLines.filter(
          (salesBillLine) => salesBillLine.lineNo != action.payload.lineNo
        ),
      };

    default:
      return state;
  }
};

export default salesBillReducer;
