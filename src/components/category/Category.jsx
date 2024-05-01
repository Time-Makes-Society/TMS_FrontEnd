import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authActions } from '../../store/auth';
import axios from 'axios';
const dummydata=[
    {id:1, name:'CULTURE'},
    {id:2, name:'ECONOMY'},
    {id:3, name:'ENTERTAIN'},
    {id:4, name:'POLITICS'},
    {id:5, name:'SCIENCE'},
    {id:6, name:'SOCIETY'},
    {id:7, name:'SPORTS'},
    {id:8, name:'TECHNOLOG'},
    {id:9, name:'WORLD'},
]
function Category() {
    const [activeCategory,setActiveCategory] =useState([]);
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth.isAuthenticated)
    const login = useSelector(state => state.login.loginId)
    const handleCategory = (name) =>{
        if(activeCategory.includes(name)){
            setActiveCategory(activeCategory.filter(item => item !== name))
        }
        else{
            setActiveCategory([...activeCategory, name])
        }
    }
    console.log("activeCategory :" , activeCategory)
    console.log('loginState: ',login)
    const handleContinue = async() => {
        // - 선택한 카테고리 API통신 추가 코드 작성 -
        // try{
        //     await axios.post(`/api/members/${memberId}/tag`,{
        //         activeCategory
        //     })
        // }
        // catch(error){
        //     new Error(error)
        // }
        navigate("/timeset")
        
    }
    console.log("auth상태",auth)
  return (
    <div className='category-wrap'>
        <div className='category-header'>
            <h1>관심있는 주제를 모두 선택해주세요</h1>
            <p>관심있는 주제를 한가지 이상 선택해 주세요.<br/>
            내게 꼭 맞는 뉴스를 추천해 드릴게요!
            </p>
            
        </div>
        <div className='category-content-wrap'>
            {dummydata.map((data)=>{
                return (
                    <div className={`category-content ${activeCategory.includes(data.name) ? 'active' : ''} `} 
                        key={data.id} 
                        onClick={() => handleCategory(data.name)}>{data.name} </div>
                )
            })}
            
        </div>
        <button className='continue-button' onClick={handleContinue}>계속하기</button>
    </div>
  )
}

export default Category