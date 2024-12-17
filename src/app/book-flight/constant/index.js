import { required } from "@/utils/globalFunctions.util";

export const personalTabValidations = (value) =>
  required(value.fullName) || required(value.email) || required(value.mobile);

export const isBasicValid = (tab, val, emailExists) => {
  if (tab === 0) {
    return !personalTabValidations(val);
  }

  return true;
};
