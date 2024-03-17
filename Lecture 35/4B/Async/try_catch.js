let url = "https://jsonplaceholder.typicode.com/todos";

async function fetchData(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

// We are Calling fetchData function here:
fetchData(url)
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
