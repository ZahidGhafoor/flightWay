import http from "./http.service";
import Promisable from "./promisable.service";

const baseUrl = "https://b2b-backend-staging-627151212374.asia-east1.run.app";

const GroupService = {
  getFlights: async (data) => {
    // setLoading(true);
    http.setJWT();
    console.log("data", data);
    const [success, error] = await Promisable.asPromise(
      http.get(
        `${baseUrl}//v1/groups?origin=${data.origin}&destination=${data.destination}`
      )
    );

    if (success) {
      // setLoading(false);
      // setIsModalOpen(true);
    }
    // setLoading(false);

    return [success, error];
  },
};

export default GroupService;
