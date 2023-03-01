/* eslint-disable default-param-last */
/* eslint-disable consistent-return */

import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";

const makeRequest = async (
  apiEndPoint = { url: "", method: "" },
  dynamicConfig = {}
) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default makeRequest;
