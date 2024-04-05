import * as actionTypes from "./sales_bill_type";

export const addToSalesBill = (item, quantity, lineNo) => {
  return {
    type: actionTypes.ADD_TO_SALES_BILL,
    payload: {
      lineNo: lineNo,
      quantity: quantity,
      item: item,
    },
  };
};

export const adjustQuantity = (item, quantity) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      item: item,
      quantity: quantity,
    },
  };
};

export const adjustDiscountAmount = (item, adjustedDiscountAmount) => {
  return {
    type: actionTypes.ADJUST_DISCOUNT_AMOUNT,
    payload: {
      item: item,
      adjustedDiscountAmount: adjustedDiscountAmount,
    },
  };
};

export const adjustDiscountPercentage = (item, adjustedDiscountPercentage) => {
  return {
    type: actionTypes.ADJUST_DISCOUNT_PERCENTAGE,
    payload: {
      item: item,
      adjustedDiscountPercentage: adjustedDiscountPercentage,
    },
  };
};

export const adjustUnit = (item, adjustedUnit) => {
  return {
    type: actionTypes.ADJUST_UNIT,
    payload: {
      item: item,
      adjustedUnit: adjustedUnit,
    },
  };
};

export const removeFromSalesBill = (lineNo) => {
  return {
    type: actionTypes.REMOVE_FROM_SALES_BILL,
    payload: {
      lineNo: lineNo,
    },
  };
};
