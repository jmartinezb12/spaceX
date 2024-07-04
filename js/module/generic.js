export const fetchData = async (queryOptions, endpoint) => {
  const apiUrl = `https://api.spacexdata.com/v4/${endpoint}/query`;
  let fetchConfig = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(queryOptions)
  };

  let response = await fetch(apiUrl, fetchConfig);
  return await response.json();
};
