const DetailFetchApi = async (tickers) => {
    // const movieApiKey = "1e2cd287"
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=${tickers}&apikey=1e2cd287`); // Change to HTTPS
    console.log(res)
    const finalData = await res.json();
    console.log(finalData);
    return finalData;
  } catch (err) {
    console.error("Fetch error:", err);
    return null; // Handle the error as needed
  }
};


// DetailFetchApi()
export default DetailFetchApi;