import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const Timer = () => {
    
	const navigate=useNavigate();
	
	const Ref = useRef(null);

	const [timer, setTimer] = useState('00:00');


	const getTimeRemaining = (e) => {
		let total = Date.parse(e) - Date.parse(new Date());
        total+=90*60*1000;
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60));
		if(total===0)navigate('/endpage')
		return {
			total, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			setTimer(
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {		
		setTimer('90:00');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();
        
		deadline.setSeconds(deadline.getSeconds());
		return deadline;
	}

	useEffect(() => {
		clearTimer(getDeadTime());
	},[]);

   return<p style={{fontSize:16,display:'inline-block',float:'right',margin:'8px 30px -2px 30px'}}><b>Time Left : {timer}</b></p>
    	
             
	
}

export default Timer;
