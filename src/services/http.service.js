import axios from "axios";
import ToasterService from "../utils/toaster.util";

const response = {
  message: "Tokens generated successfully",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmU4MTY5NDNhYTBlYmZiN2JjMjhkZjYiLCJuYW1lIjoiRmFpemFuIiwiY29tcGFueSI6eyJuYW1lIjoiTmF6aXIiLCJpZCI6IiJ9LCJlbWFpbCI6ImZhaXphbkBnbWFpbC5jb20iLCJwaG9uZU51bWJlciI6IjAwMDAwMDAiLCJzdGF0dXMiOiJhcHByb3ZlZCIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZmFpemFuIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDktMTZUMTE6Mjk6MjQuOTQ2WiIsImlhdCI6MTczMzg2OTkzMywiZXhwIjoxNzMzODczNTMzfQ.AysBSexwriEd4aA8wGqGd4fWjXw_rthzYFOs4YUNvr4",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmU4MTY5NDNhYTBlYmZiN2JjMjhkZjYiLCJuYW1lIjoiRmFpemFuIiwiY29tcGFueSI6eyJuYW1lIjoiTmF6aXIiLCJpZCI6IiJ9LCJlbWFpbCI6ImZhaXphbkBnbWFpbC5jb20iLCJwaG9uZU51bWJlciI6IjAwMDAwMDAiLCJzdGF0dXMiOiJhcHByb3ZlZCIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZmFpemFuIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDktMTZUMTE6Mjk6MjQuOTQ2WiIsImlhdCI6MTczMzg2OTkzMywiZXhwIjoxNzM2NDYxOTMzfQ.7PXhTxVoXP-FvBhCQJb6b1P7p-nmXtGilhdZUSB0vPo",
};

axios.interceptors.response.use(
  (res) => {
    console.log("res", res);
    const { message } = res.data;

    ToasterService.showSuccess(message);

    return res;
  },
  (err) => {
    const { message: msg, response } = err;
    const message = response?.data?.message;

    ToasterService.showError(message || msg);

    throw err;
  }
);
const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
  setJWT: () => {
    axios.defaults.headers.common.authorization = `Bearer ${response.token}`;
    // axios.defaults.headers.common.authorization = `${response.token}`;
  },
};

export default http;
