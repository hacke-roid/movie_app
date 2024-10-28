import React, { useState } from 'react'
// import fetchingApi from './Api.jsx'
import Searchbar from './components/Searchbar.jsx';
import DisplaySearch from './components/DisplaySearch.jsx';  
import DashBoard from './components/DashBoard.jsx';
import './App.css';

const App = () => {

  const [data, setData] = useState([])
  const [isRating, setIsRating] = useState();

  // console.log(data)
  const handleSearch = (term) => {
    console.log(term.Title)
    let numerator = Math.floor(parseInt(term.Ratings[0].Value[0]))
    console.log(numerator)
    setData(term)
    setIsRating(numerator)
  }

  return (
    <div className='App_container'>
      <Searchbar onSearch={handleSearch} data={data}/>
      {
        data.Title ? <DisplaySearch data={data} Rating={isRating}/>: <DashBoard/>
      }
    </div>
  )
}

export default App
