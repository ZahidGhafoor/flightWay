import { groupFlightActions } from "@/redux/slices/groupFlightSlice";
import http from "./http.service";
import Promisable from "./promisable.service";

const baseUrl = "https://b2b-backend-staging-627151212374.asia-east1.run.app";

const GroupService = {
  getFlights: async (data, dispatch) => {
    dispatch(groupFlightActions.setLoading(true));
    http.setJWT();
    console.log("data", data);
    const [success, error] = await Promisable.asPromise(
      http.get(
        `${baseUrl}//v1/groups?origin=${data.origin}&destination=${data.destination}`
      )
    );

    if (success) {
      dispatch(groupFlightActions.setLoading(false));
      // dispatch(groupFlightActions.setFlights());
      console.log("scu", success);
    }
    dispatch(groupFlightActions.setLoading(false));

    return [success, error];
  },
};

export default GroupService;
