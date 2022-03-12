import { apiClient } from './apiClient';
import { getErrorMsg } from './apiIssues';

const GetRequest = async (endPoint: string, payload: any) => {
  const response = await apiClient.get(endPoint, payload);
  if (response?.ok) {
    return response;
  } else {
    const error = getErrorMsg(response);
    return error;
  }
};

export { GetRequest };
