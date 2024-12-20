// Function to fetch data from API endpoint
export const fetchData = async (endpoint: string) => {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  };
  