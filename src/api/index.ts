import { apiClient } from './apiClient';
import { getErrorMsg } from './apiIssues';

const getRequest = async (endPoint: string) => {
  const response = await apiClient.get(endPoint);
  if (response?.ok) {
    return response;
  } else {
    const error = getErrorMsg(response);
    return error;
  }
};

export { getRequest };
