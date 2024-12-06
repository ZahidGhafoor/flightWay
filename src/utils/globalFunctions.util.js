export const handleChange = (e, setVal) => {
  const { name, value } = e.target;
  setVal((prevVal) => ({
    ...prevVal,
    [name]: value,
  }));
};
