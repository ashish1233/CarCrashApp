import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import api from '../api/data'
import CarCrashList from './CarCrashList'
import CarCrashDetail from './CarCrashDetail';
import moment from "moment"



function App() {
  const [getCarcrashData, setcarCarcrashdata] = useState([])
  const [date, setDate] = useState('')
   
  const handledateChange  = (e) =>{
    const currentdate= e.target.value
    console.log((currentdate))
    setDate(currentdate)

    const filteredData= date && getCarcrashData.filter((item)=>{
      console.log(moment(item.crash_date).format("YYYY-MM-DD")==date)
     // return ((moment(item.crash_date).format("YYYY-MM-DD")) == date)
    })
    setcarCarcrashdata(filteredData)
    //setDate(e.target.value)
  }

  const retrievedata  = async () =>{
    const response = await api.get('/h9gi-nx95.json')
    console.log(response)
    return response.data
  }
  

  useEffect(()=>{
     const getAllData = async () =>{
       const alldata = await retrievedata()
       console.log(alldata)
       if(alldata) setcarCarcrashdata(alldata)
     }
     getAllData()
  }, [])


  return (
    <div >
      <div style={{margin:"20px"}} className="ui fixed  center header">
        <h1>Car crash app</h1>
        <input onChange={handledateChange} type ="date" name= "date"/> 
      </div>
      <Router>
      <Switch>
     
      <Route path = "/detail/:id"
        component = {CarCrashDetail}
     />
      <CarCrashList carcrashData= {getCarcrashData} />
      
     </Switch>
      </Router>
      
    </div>
  );
}

export default App;
