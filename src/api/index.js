const URL = "https://iris-api-adue.onrender.com/api/";
export const getHeartRate = async () => {
  const response = await fetch(URL + "pulse/user/63fbe07a465cbc082055261d");
  const data = await response.json();
  return data.data;
};

export const getMovement = async () => {
  const response = await fetch(URL + "movement/user/63fbe07a465cbc082055261d");
  const data = await response.json();
  return data.data;
};
