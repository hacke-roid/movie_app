import React, { useState } from 'react'
// import fetchingApi from './Api.jsx'
import Searchbar from './components/Searchbar.jsx';
import DisplaySearch from './components/DisplaySearch.jsx';  
import DashBoard from './components/DashBoard.jsx';

const App = () => {

  const [data, setData] = useState([])
  // console.log(data)
  const handleSearch = (term) => {
    console.log(term.Title)
    setData(term)

  }

  return (
    <div>
      <Searchbar onSearch={handleSearch} data={data}/>
      {
        data.Title ? <DisplaySearch data={data}/>: <DashBoard/>
      }
    </div>
  )
}

export default App
