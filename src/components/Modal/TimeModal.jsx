import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { timerActions } from '../../store/count';
function TimeModal() {
    const dispatch = useDispatch();
    const timer = useSelector(state => state.timer.modifiedTimer)
    useEffect(()=>{
      const id =setInterval(()=>{
        dispatch(timerActions.tick())
      },1000);
      if(timer===0){
        clearInterval(id);
        dispatch(timerActions.stopTimer())
        // 시간 만료되면 자동 로그아웃 기능 추가해야함
      }
      return () => clearInterval(id);
    },[dispatch])
    console.log("timer: ", timer)
  return (
    <div className='timemodal-wrap'>
        <span className='timemodal-bar'>
          <span className='timemodal-time'>{timer}</span>
        </span>
    </div>
  )
}

export default TimeModal