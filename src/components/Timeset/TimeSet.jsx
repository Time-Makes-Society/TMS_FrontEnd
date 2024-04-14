import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TimeSet() {
    const [Time, setTime] = useState();
    const navigate = useNavigate()
    const handleTime = () => {
        //-- API 통신 추가 --
        navigate('/home')
    }
    const handleStick = (id) => {
        const computedTime = 5*(12-id)
        const stringTime = `${computedTime}:00`
        const sticks = document.querySelectorAll('.timeset-stick');
        if(Time===stringTime){
            sticks.forEach((stick,index)=>{
                stick.classList.remove('selected');
            })
            setTime(null)
        }
        else{
            sticks.forEach((stick,index)=>{
                if(index>=id){
                    stick.classList.add('selected');
                }
                else{
                    stick.classList.remove('selected');
                }
            })
            setTime(stringTime);
        }
        
    };


    const timeSticks = Array.from({ length: 12 }, (_, index) => (
        <div key={index} onClick={() => handleStick(index)} className='timeset-stick' />
    ));


    return (
        <div className='timeset-wrap'>
            <h1>원하는 시간을 설정해 보세요</h1>
            <p>내가 설정한 시간에 따라 뉴스를 요약해줘요</p>
            <p className='time'>{Time ? Time : '0:00'}</p>
            <div className='timeset-stick-wrap'>
                {timeSticks}
            </div>

            <button onClick={handleTime}>계속하기</button>
        </div>
    )
}

export default TimeSet
