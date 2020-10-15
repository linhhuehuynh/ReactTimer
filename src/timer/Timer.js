import React from 'react';

const timer = (props) => {
    return (
        <div className="Timer">
            {props.pauseHour ? <input value={props.hour} onChange={props.changeHour} onKeyPress={props.enter}/> : <span onClick={props.clickHour}>{props.hour}</span>} :
            {props.pauseMin ? <input value={props.min} onChange={props.changeMin} onKeyPress={props.enter}/> : <span onClick={props.clickMin}> {props.min}</span>} :
            {props.pauseSec ? <input value={props.sec} onChange={props.changeSec} onKeyPress={props.enter}/> : <span onClick={props.clickSec}> {props.sec}</span>} 
            <span> {props.ampm}</span>
        </div>
      );
}
 
export default timer;