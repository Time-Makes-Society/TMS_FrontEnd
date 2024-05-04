import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { timerActions } from '../../store/count';
function TimeModal({time}) {
    const [minute,second] = (time || '00:00').split(':').map(str => parseInt(str, 10));
    const isValidTime = !isNaN(minute) && !isNaN(minute);
    const totalMinutes = isValidTime ? minute*60 + second : 0;
    const [timeState,setTimeState] = useState(totalMinutes);
    const dispatch = useDispatch();
    const timer = useSelector(state => state.timer.modified)
    useEffect(()=>{
      const id =setInterval(()=>{
        dispatch(timerActions.modified())
        setTimeState((count)=>count-1);
      },1000);
      if(timer===0){
        clearInterval(id);
      }
      return () => clearInterval(id);
    },[timeState,dispatch])
    console.log("timer: ", timer)
  return (
    <div className='timemodal-wrap'>
        <span className='timemodal-bar'>
          <span className='timemodal-time'>{timeState}</span>
        </span>
    </div>
  )
}

export default TimeModal