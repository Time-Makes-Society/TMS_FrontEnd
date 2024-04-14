import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TimeSet() {
    const [Time, setTime] = useState('5:00');
    const navigate = useNavigate()
    const handleTime = () => {
        navigate('/home')
    }
    return (
        <div className='timeset-wrap'>
            <h1>원하는 시간을 설정해 보세요</h1>
            <p>내가 설정한 시간에 따라 뉴스를 요약해줘요</p>
            <p className='time'>{Time}</p>
            <div className='timeset-stick-wrap'>
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
                <div className='timeset-stick' />
            </div>

            <button onClick={handleTime}>계속하기</button>
        </div>
    )
}

export default TimeSet