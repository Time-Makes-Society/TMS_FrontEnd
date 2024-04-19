import React, { useEffect, useState } from 'react'

function TimeModal({time}) {
    const [minute,second] = time.split(':').map(str => parseInt(str, 10));
    const totalMinutes = minute*60 + second;
    const [timeState,setTimeState] = useState(totalMinutes);
    
    useEffect(()=>{
      const id =setInterval(()=>{
        setTimeState((count)=>count-1);
      },1000);
      if(timeState===0){
        clearInterval(id);
      }
      return () => clearInterval(id);
    },[timeState])
    
  return (
    <div className='timemodal-wrap'>
        <span className='timemodal-bar'>
          <span className='timemodal-time'>{timeState}</span>
        </span>
    </div>
  )
}

export default TimeModal