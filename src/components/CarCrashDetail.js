import React from 'react';

const CarCrashDetail = (props) => {
    console.log(props)
    const {vehicle_type_code1, vehicle_type_code2, crash_date, crash_time} = props.location.state.singleDetail
    return (
        <div style={{margin:"50px"}}>
            <div >Car crash Detail </div>
             <div>Vehicle 1 : {vehicle_type_code1}</div>
              <div>Vehicle 2 : {vehicle_type_code2}</div>
              <div> Crash date : {crash_date}</div>
              <div> Crash date : {crash_time}</div>
        </div>
    );
};

export default CarCrashDetail;