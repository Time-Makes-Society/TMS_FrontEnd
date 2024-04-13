import React from 'react';
import { useNavigate } from 'react-router-dom';

import backward from '../../assets/backward.svg';
import idimg from '../../assets/signup/id-img.svg';
import pwimg from '../../assets/signup/pw-img.svg';
import nameimg from '../../assets/signup/name-img.svg';
import phoneimg from '../../assets/signup/phone-img.svg';

function Signup() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/category');
    }
    const handleBackward=()=>{
        navigate('/');
    }
    return (
        <>
            <div className='signup-header-wrap'>
                <img src={backward} alt='backward' onClick={handleBackward} className='backward' />
                <h1 className='signup-header'>회원가입</h1>
            </div>
            <form onSubmit={handleSubmit} className='signup-content-wrap'>
                <label >아이디</label>
                <input placeholder='아이디를 입력해주세요.' style={{ backgroundImage: `url(${idimg})` }} />
                <label >비밀번호</label>
                <input placeholder='비밀번호를 입력해주세요.' style={{ backgroundImage: `url(${pwimg})` }} />
                <input placeholder='비밀번호 확인' style={{ backgroundImage: `url(${pwimg})` }} />
                <label >이름</label>
                <input placeholder='이름을 입력해주세요.' style={{ backgroundImage: `url(${nameimg})` }} />
                <div className='nickname-wrap'>
                    <label className='nickname-label' >닉네임</label>
                    <button type='button' className='overlap'>중복확인</button>
                </div>

                <input placeholder='닉네임을 입력해주세요.' style={{ backgroundImage: `url(${nameimg})` }} />
                <label >휴대폰 번호</label>
                <input placeholder='휴대폰 번호를 입력해주세요.' style={{ backgroundImage: `url(${phoneimg})` }} />
                <button type='submit' className='signup-button'>가입하기</button>
            </form>
        </>


    )
}

export default Signup