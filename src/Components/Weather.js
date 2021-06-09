import React from 'react';


const Weather = (props) => {
   
    return (
        <div className="info">
            {
               props.temperature &&
                <p  className="info_key">Temperature : 
                  <span  className="info_value"> {props.temperature} </span>
                </p>
            }
            {
               props.city && 
               <p className="info_key">City :
                   <span className="info_value"> {props.city} </span>
                </p>
            }
            {
               props.timezone && 
               <p className="info_key">Timezone : 
                   <span className="info_value">{props.timezone} </span>
                </p>
            }
            {
               props.pressure && 
               <p className="info_key">Pressure : 
                   <span className="info_value">{props.pressure} </span>
                </p>
            }
            {
               props.description &&
                <p className="info_key">Description : 
                    <span className="info_value">{props.description} </span>
                </p>
            }
            {
               props.error &&
                <p className="info_key">Error :
                   <span className="info_value"> {props.error} </span>
                </p>
            }
        </div>
    );
    
}

export default Weather;
