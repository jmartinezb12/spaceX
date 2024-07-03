export const fetchData = (query, endpoint) => (
    fetch(`https://api.spacexdata.com/v4/${endpoint}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error('Error fetching data:', error))
  );
  