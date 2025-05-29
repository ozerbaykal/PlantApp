import Client from './instance';

export const getRequest = async (params: object, URL: string) => {
  const response = await Client.get(URL, { params });
  return response;
};
