const URL = "http://3.14.9.247:3333/api/";
export const getHeartRate = async () => {
  const response = await fetch(URL + "pulse/user/63fbe07a465cbc082055261d");
  const data = await response.json();
  return data.data;
};
