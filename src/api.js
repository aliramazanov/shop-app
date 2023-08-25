export const fetchData = async () => {
  try {
    const response = await fetch("/data/data.JSON");
    if (!response.ok) {
      throw new Error(
        `Something went wrong (Status ${response.status}): ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error when fetching data: ${error.message}`);
  }
};
