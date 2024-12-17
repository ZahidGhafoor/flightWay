export const handleChange = (e, setVal) => {
  const { name, value } = e.target;
  setVal((prevVal) => ({
    ...prevVal,
    [name]: value,
  }));
};

export const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

export const greaterThanOne = (value) => (value > 0 ? undefined : "Required");
