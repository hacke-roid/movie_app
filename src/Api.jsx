const fetchWebApi =async (tickers) => {
  // let api_key = '069ef05253864d9c0efb00fc0cdbebac'
  // console.log(process.env); // This will print all environment variables

  try{
    // const apiKey = "1e2cd287"

  let res =await fetch(`http://www.omdbapi.com/?t=${tickers}&apikey=1e2cd287`);

  console.log(res)
  
  let finalData = await res.json()
  console.log(finalData)
  return finalData
  }
  catch(err){
    console.error(err)
  }
}

export default fetchWebApi