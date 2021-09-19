import React from 'react';
import {Link} from 'react-router-dom'

const CarCrashList = (props) => {
    console.log(props)
    return (
        <div>
            {props.carcrashData.map((item)=>{
               return(
                   <Link 
                   to = {{pathname : `/detail/${item.collision_id}`, state: {singleDetail: item}}}>
                <div style={{margin:"20px"}} className="card"> 
              <div>Vehicle 1 : {item.vehicle_type_code1}</div>
              <div>Vehicle 2 : {item.vehicle_type_code2}</div>
              <div> Crash date : {item.crash_date}</div>
              <div> Crash Time : {item.crash_time}</div>
              </div>
              </Link>
               )
            })
        } 
        </div>
    );
};

export default CarCrashList;