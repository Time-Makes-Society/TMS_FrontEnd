import React from 'react';
import { useNavigate } from 'react-router-dom';

import backward from '../../assets/backward.svg';

function Signup() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/category');
    }
    return (
        <form onSubmit={handleSubmit} className='signup-wrap'>
            <div className='signup-header'>
                <img src={backward} alt='backward' className='backward' />
                <h1>회원가입</h1>
            </div>
            <div className='signup-content'>
                <label >아이디</label>
                <input placeholder='아이디를 입력해주세요.' />
            </div>

        </form>

    )
}

export default Signup