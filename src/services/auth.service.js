import http from "./http.service";
import Promisable from "./promisable.service";

// import { baseUrl } from "@/utils/constant";

const payload = {
  username: "faizan",
  password: "123456",
  companyId: "",
};

const AuthService = {
  generateAuthToken: async (data) => {
    const [success, error] = await Promisable.asPromise(
      http.post(
        `https://b2b-backend-staging-627151212374.asia-east1.run.app/v1/auth/generate-token`,
        payload
      )
    );

    if (success) {
      localStorage.setItem("token", `Bearer ${success?.data?.token}`);
    }

    return [success, error];
  },
};

export default AuthService;
